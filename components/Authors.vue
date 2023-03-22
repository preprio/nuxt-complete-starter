<template>
  <div class="p-5 rounded-lg bg-gray-50">
    <div
      :key="author.full_name"
      class="flex items-center mb-6 space-x-2"
      v-for="author in authors"
    >
      <div class="text-base font-medium leading-tight dark:text-white">
        <div class="flex flex-row">
          <img
            class="object-cover w-6 h-6 mr-2 rounded-full"
            :src="author.profile_pic[0].url"
            alt=""
          />
          <div>{{ author.full_name }}</div>
        </div>

        <div
          class="ml-8 text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"
        >
          {{ author.bio }}
        </div>
      </div>
      <div>
        <button
          @click.prevent="store.popupVisible = true"
          class="px-3 py-2 text-xs font-medium text-gray-800 border border-gray-100 rounded-lg bg-gray-50 hover:bg-gray-200"
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
