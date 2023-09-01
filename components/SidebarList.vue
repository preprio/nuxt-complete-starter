<template>
  <aside class="w-full" aria-label="Sidebar">
    <div
      class="p-4 overflow-y-auto bg-white border border-gray-200 rounded rounded-lg dark:bg-gray-800 dark:border-gray-700"
    >
      <ul>
        <li>
          <a
            href="."
            @click.prevent="$emit('setCategory', null)"
            class="flex items-center p-2 text-base font-medium text-gray-500 rounded-lg dark:text-white hover:bg-gray-100"
            :class="currentCategory === null && 'text-violet-700'"
          >
            <img src="@/assets/oven.svg" class="flex-shrink-0 w-3.5 h-3.5"/>
            <span class="ml-3">All categories</span>
          </a>
        </li>
        <li v-for="category in categories" :key="category._id">
          <a
            href="."
            @click.prevent="$emit('setCategory', category._slug)"
            class="flex items-center p-2 text-base font-medium text-gray-500 rounded-lg dark:text-white hover:bg-gray-100"
            :class="currentCategory === category._slug && 'text-violet-700'"
          >
            <img class="flex-shrink-0 w-3.5 h-3.5" v-if="category.icon" :src="category.icon[0].url" />
            <span class="flex-1 ml-3 whitespace-nowrap">
              {{category.title }}
            </span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { GetCategories } from "~/queries/get-categories";
const categoryQuery = await useAsyncQuery(GetCategories);
const categories = categoryQuery.data.value.Categories.items;
const props = defineProps(["currentCategory"]);
const currentCategory = computed(() => props.currentCategory);
</script>
