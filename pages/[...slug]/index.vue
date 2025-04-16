<template>
  <meta property='prepr:id' :content="page._id"/>

  <!--Loop through elements in the queried stack and set the data variable to the components you want -->
  <component
      v-for="element in stack"
      :key="element._id"
      :is="getComponent(element.__typename)"
      :data="element"
  ></component>
</template>
<script setup>
import { computed } from "vue";
import { GetPageBySlug } from "@/queries/get-page-by-slug";

// Import the components
import HeroSection from "@/components/hero-section";
import FeatureSection from "@/components/feature-section";

const cookie = useCookie('__prepr_uid');
const customerId = cookie.value;
const route = useRoute();

// Set up the components
const components = [
  { name: "Hero", comp: HeroSection },
  { name: "Feature", comp: FeatureSection },
];

// Assign the components for the stack loop above
const getComponent = (name) => {
  const component = components.find((component) => component.name === name);
  return component ? component.comp : null;
};

const { data } = await useAsyncQuery({
  query: GetPageBySlug,
  variables: {
    slug: route.params.slug ? route.params.slug.join('/') : '/'
  },
  context: {
    headers: {
      "Prepr-Customer-Id": customerId
    }
  }
});

{/* Output the query results to the console */}
console.log(JSON.stringify(data, undefined, 2));

// Assign the page and stack variables with the queried results
const page = data.value.Page;

const stack = computed(() => {
  return page.content;
});
</script>