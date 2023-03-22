<template>
  <div class="max-w-screen-xl gap-4 mx-auto grid lg:grid-cols-2">
    <Banner slug="personalization-pattern"/>
    <SegmentSwitch title="Try it out!" @set-segment="changeSegment"/>
  </div>
  
  <component
    v-for="element in state.stack"
    :key="element._id"
    :is="getComponent(element.__typename)"
    :data="element"
  ></component>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import Banner from "@/components/Banner";
import SegmentSwitch from "@/components/SegmentSwitch";
import PageHeader from "@/components/PageHeader";
import ImageAndText from "@/components/ImageAndText";
import ArticleCollection from "@/components/ArticleCollection";
import ProductCollection from "@/components/ProductCollection";
import CallToAction from "@/components/CallToAction";
import { GetPageBySlug } from "@/queries/preprQueries";

const contentItemID = ref("");
const clientId = ref("prepr");

const state = reactive({
  clientId: "prepr",
  stack: [],
});

const components = [
  { name: "PageHeader", comp: PageHeader },
  { name: "ImageAndText", comp: ImageAndText },
  { name: "ArticleCollection", comp: ArticleCollection },
  { name: "ProductCollection", comp: ProductCollection },
  { name: "CallToAction", comp: CallToAction },
];

useHead({
  meta: [
    {
      name: "prepr:id",
      content: contentItemID,
    },
  ],
});

const getComponent = (name) => {
  const component = components.find((component) => component.name === name);
  return component ? component.comp : null;
};

const { data, error, refresh } = await useAsyncQuery({
  query: GetPageBySlug,
  variables: {
    slug: "home-page-personalization",
  },
  clientId: clientId.value,
});

state.stack = data.value.Page.stack;

const changeSegment = async (segment) => {
  clientId.value = segment;
  const { data, error, refresh } = await useAsyncQuery({
    query: GetPageBySlug,
    variables: {
      slug: "home-page-personalization",
    },
    clientId: clientId.value,
  });

  state.stack = data.value.Page.stack;
  refresh();
};


</script>


