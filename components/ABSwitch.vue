<template>
  <div class="grid mx-4 lg:mx-0" >
    <div class="rounded-xl bg-gray-50">
      <div class="px-8 py-7">
        <h2
          class="inline text-xl font-semibold leading-tight text-gray-900 sm:block"
        >
          {{ title }}
        </h2>
        <p class="my-4 text-base">
          See our A/B testing engine in action by selecting a version below.
        </p>

        <div class="inline-flex w-full rounded-md shadow-sm md:w-auto" role="group">
          <button
            type="button"
            @click="emitSegment('a')"
            :class="segment === 'a' ? 'bg-gray-700 text-white focus:text-white' : 'bg-white text-gray-700 focus:text-gray-700'"
            class="w-1/2 p-4 px-6 text-sm font-medium border border-gray-200 rounded-l-lg md:w-48 focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-gray-700"
          >
            Version A
          </button>

          <button
            type="button"
            @click="emitSegment('b')"
            :class="segment === 'b' ? 'bg-gray-700 text-white focus:text-white' : 'bg-white text-gray-700 focus:text-gray-700'"
            class="w-1/2 p-4 px-6 text-sm font-medium border border-gray-200 md:w-48 rounded-r-md focus:z-10 focus:ring-2 focus:ring-gray-700 "
          >
            Version B 
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { store } from "@/store/store.js";

const props = defineProps({ title: String, type: String });
const emit = defineEmits(["setSegment"]);
const segment = ref('a');

const emitSegment = (val) => {
  segment.value = val;
  emit("setSegment", val);
};
</script>
