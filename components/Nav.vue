<template>
  <nav
    class="absolute top-0 left-0 right-0 bg-white border-gray-200 md:relative dark:border-gray-600 dark:bg-gray-900"
  >
    <div
      class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto min-h-20 md:h-20 md:px-6"
    >
      <Logo />
      <button
        id="mega-menu-full-cta-button"
        @click="toggleNav"
        type="button"
        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mega-menu-full-cta"
        :aria-expanded="state.expanded"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

      <div
        id="mega-menu-full-cta"
        :class="state.expanded ? '' : 'hidden'"
        class="items-center justify-between w-full md:flex md:w-auto md:grow md:basis-auto"
      >
        <ul
          class="flex flex-col pl-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0"
        >
          <li>
            <nuxt-link
              to="/page-pattern/home"
              :class="
                path == '/page-pattern' ? 'text-violet-600' : 'text-gray-900'
              "
              class="block py-2 pr-4 border-t border-b border-gray-100 md:pl-3 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-gray-400 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-violet-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >Page
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/blog"
              :class="path == '/blog' ? 'text-violet-600' : 'text-gray-900'"
              class="block py-2 pr-4 border-b border-gray-100 md:pl-3 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-gray-400 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-violet-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >Blog</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/livestream"
              :class="
                path.includes('/livestream')
                  ? 'text-violet-600 font-semibold'
                  : 'text-gray-700 font-medium'
              "
              class="block py-2 pr-4 border-b border-gray-100 md:pl-3 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-gray-400 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-violet-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >Live stream</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/navigation"
              :class="
                path == '/navigation'
                  ? 'text-violet-600 font-semibold'
                  : 'text-gray-900 font-medium'
              "
              class="block py-2 pr-4 border-b border-gray-100 md:pl-3 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-gray-400 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-violet-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >Navigation</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/personalization"
              :class="
                path == '/personalization'
                  ? 'text-violet-600 font-semibold'
                  : 'text-gray-900 font-medium'
              "
              class="block py-2 pr-4 border-b border-gray-100 md:pl-3 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-gray-400 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-violet-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >Personalization</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/a-b-testing"
              :class="
                path == '/a-b-testing'
                  ? 'text-violet-600 font-semibold'
                  : 'text-gray-900 font-medium'
              "
              class="block py-2 pr-4 border-b border-gray-100 md:pl-3 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-gray-400 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-violet-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >A/B testing</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { watch, computed, reactive } from "vue";
import { useRoute } from "vue-router";

import Logo from "@/components/Logo.vue";

const route = useRoute();
const state = reactive({ expanded: false });

const toggleNav = () => {
  state.expanded = !state.expanded;
};

watch(route, async (newRoute, oldRoute) => {
  state.expanded = false;
});

const path = computed(() => {
  return route.path;
});
</script>

<style scoped>
.min-h-20 {
  min-height: 5rem;
}
</style>
