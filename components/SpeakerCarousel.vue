<template>
  <div
    id="indicators-carousel"
    class="relative overflow-hidden"
    data-carousel="static"
  >
    <div class="rounded-lg h-374">
      <div
        v-for="speaker in speakers"
        :key="speaker._id"
        :data-carousel-item="index == 0"
        class="absolute p-4 duration-700 bg-white h-374"
      >
        <div class="p-4 border border-gray-200 rounded-lg">
          <img
            class="object-cover w-full h-48 mb-6 rounded-lg"
            :src="speaker.profile_pic[0].url"
            alt=""
          />
          <div>
            <h5 class="text-lg font-bold leading-tight text-gray-900">
              {{ speaker.full_name }}
            </h5>
            <p class="text-sm font-normal text-gray-500">{{ speaker.bio }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between w-2/4 mx-auto mt-4">
      <button
        type="button"
        data-carousel-prev
        class="flex items-center justify-center w-5 h-5 bg-gray-400 rounded-full"
      >
        <svg
          width="6"
          height="8"
          viewBox="0 0 6 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.31266 6.91634L1.396 3.99967L4.31266 1.08301"
            stroke="white"
            stroke-width="1.4375"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div class="flex mx-auto space-x-3">
        <button
          v-for="(speaker, index) in speakers"
          :key="speaker._id"
          type="button"
          class="w-2 h-2 bg-gray-300 rounded-full aria-[current=true]:bg-gray-900"
          :aria-current="index === 0"
          :aria-label="`Slide ${index + 1}`"
          :data-carousel-slide-to="index"
        ></button>
      </div>
      <button
        type="button"
        data-carousel-next
        class="flex items-center justify-center w-5 h-5 bg-gray-400 rounded-full"
      >
        <svg
          width="6"
          height="8"
          class="rotate-180"
          viewBox="0 0 6 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.31266 6.91634L1.396 3.99967L4.31266 1.08301"
            stroke="white"
            stroke-width="1.4375"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useFlowbite } from "@/helpers/flowbite";
const flowbite = useFlowbite();
const props = defineProps({
  speakers: {
    type: Array,
  },
});

</script>

<style scoped>
.h-374 {
  height: 374px;
}
</style>
