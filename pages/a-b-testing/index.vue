<template>
  <div class="grid max-w-screen-xl gap-4 mx-auto lg:grid-cols-2">
    <Banner 
      title="A/B test pattern"
      copy="The A/B test pattern shows variants of web pages used for A/B testing. This pattern makes use of the A/B Testing feature in Prepr. Use it to implement A/B testing in your web app and optimize your content."
      url1="https://docs.prepr.io/create-schema/ab-test-pattern/"
    />
    <ABSwitch title="Try it out!" @set-segment="changeSegment" />
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
import ABSwitch from "@/components/ABSwitch";
import PageHeader from "@/components/PageHeader";
import ImageAndText from "@/components/ImageAndText";
import ArticleCollection from "@/components/ArticleCollection";
import ProductCollection from "@/components/ProductCollection";
import CallToAction from "@/components/CallToAction";
import { GetStaticPageBySlug } from "@/queries/preprQueries";

const contentItemID = ref("");
const clientId = ref("prepr");

const state = reactive({
  clientId: "prepr",
  stack: [],
});

const route = useRoute();
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

// Query static slug for demo on Patterns site 
const { data, error, refresh } = await useAsyncQuery({
  query: GetStaticPageBySlug,
  variables: {
    slug: "home-page-ab-testing",
  },
  clientId: `${clientId.value}segment`,
});
  
if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: error.value });
}

state.stack = data.value.Page.stack;

const changeSegment = async (segment) => {
  clientId.value = segment;
  const { data, error, refresh } = await useAsyncQuery({
    query: GetStaticPageBySlug,
    variables: {
      slug: "home-page-ab-testing",
    },
    clientId: `${clientId.value}segment`,
  });
  state.stack = data.value.Page.stack;
  refresh();
};


</script>


