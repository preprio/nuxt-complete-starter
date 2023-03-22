<template>
  <div class="container mx-auto md:px-0">
    <div
      :style="`background-image: url(${data.background_image[0].url});`"
      class="w-full px-8 py-12 mt-4 bg-white bg-no-repeat bg-cover border border-gray-200 md:px-24 md:py-16 md:mt-14 rounded-2xl dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ data.heading }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ data.description }}
      </p>
      <a
        href="#"
         @click.prevent="store.popupVisible = true"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
      >
        {{ data.cta_label }}
        <svg
          aria-hidden="true"
          class="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { store } from "@/store/store.js";
const props = defineProps(["data"]);
const data = computed(() => props.data);
</script>