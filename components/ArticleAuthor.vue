<template>
  <div
    class="p-5 mb-6 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700"
  >
    <h4 class="mb-8 text-sm font-bold text-gray-900 uppercase dark:text-white">
      Author
    </h4>
    <div
      :key="author.full_name"
      class="flex items-center space-x-2"
      v-for="author in authors"
    >
      <div class="text-base font-medium leading-tight dark:text-white">
        <div class="flex flex-row items-center mb-2">
          <img
            class="object-cover w-6 h-6 mr-2 rounded-full"
            :src="author.profile_pic[0].url"
            alt=""
          />
          <div>{{ author.full_name }}</div>
        </div>

        <div
          class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"
        >
          {{ author.bio }}
        </div>
        <button
          @click.prevent="store.popupVisible = true"
          type="submit"
          class="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-violet-600 dark:hover:bg-violet-700 focus:outline-none dark:focus:ring-violet-800 text-center w-full"
        >
          Follow
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { store } from "@/store/store.js";
const props = defineProps(["data"]);
const authors = computed(() => props.data);
</script>
