<template>
  <div class="container mx-auto md:px-0">
    <Banner
      title="Page pattern"
      copy="The generic page pattern can be used for different kinds of pages such as a landing page or a homepage. This pattern makes use of the Prepr Stack field to compose the elements on a page easily."
      url1="https://docs.prepr.io/create-schema/page-pattern/"
    />
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
import PageHeader from "@/components/PageHeader";
import ImageAndText from "@/components/ImageAndText";
import ArticleCollection from "@/components/ArticleCollection";
import ProductCollection from "@/components/ProductCollection";
import CallToAction from "@/components/CallToAction";
import { GetPageBySlug } from "~/queries/get-page-by-slug";

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

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: error.value });
}

const page = data.value.Page;
const stack = computed(() => {
  return page.stack;
});
</script>
