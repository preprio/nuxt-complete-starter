<template>
  <div class="container mx-auto md:px-0">
    <Banner slug="page-pattern" />
  </div>
  <component
    v-for="element in stack"
    :key="element._id"
    :is="getComponent(element.__typename)"
    :data="element"
  ></component>

</template>

<script setup>
import { computed } from "vue";
import { reactive } from "vue";
import { useRoute } from "vue-router";
import { useFlowbite } from "@/helpers/flowbite";
import Banner from "@/components/Banner";
import ErrorMessage from "@/components/ErrorMessage";
import PageHeader from "@/components/PageHeader";
import ImageAndText from "@/components/ImageAndText";
import ArticleCollection from "@/components/ArticleCollection";
import ProductCollection from "@/components/ProductCollection";
import CallToAction from "@/components/CallToAction";
import { GetPageBySlug } from "@/queries/preprQueries";

const flowbite = useFlowbite();
const route = useRoute();
const components = [
  { name: "PageHeader", comp: PageHeader },
  { name: "ImageAndText", comp: ImageAndText },
  { name: "ArticleCollection", comp: ArticleCollection },
  { name: "ProductCollection", comp: ProductCollection },
  { name: "CallToAction", comp: CallToAction },
];

const getComponent = (name) => {
  const component = components.find((component) => component.name === name);
  return component ? component.comp : null;
};

const state = reactive({ errors: false, errorMessage: null });

const segment = route.query.utm_campaign;
const { data, error, refresh } = await useAsyncQuery({
    query: GetPageBySlug,
    variables: {
      slug: route.params.slug,
      segment: segment || '',
    },
  });

if (error.value) {
  state.errors = true;
  state.errorMessage = JSON.stringify(error, null, 2);
} //Todo: handle error with ErrorMessage component

const page = data.value.Page;
const stack = computed(() => {
  return page.stack;
});
</script>
