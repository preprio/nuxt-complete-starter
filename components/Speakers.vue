<template>
  <div
    class="col-span-2 px-0 py-3 mx-auto text-center mt-14 md:px-4 md:py-8 lg:px-12"
  >
    <h3
      class="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white"
    >
      Speakers
    </h3>
    <p
      class="text-base font-normal text-gray-500 md:text-xl lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
    >
      Speaker descripton
    </p>
  </div>
  <SpeakerCard
    v-for="speaker in speakers"
    :key="speaker._id"
    :speaker="speaker"
  />

  <div class="block col-span-2 lg:hidden">
    <Carousel :items="speakers">
      <div class="rounded-lg h-[364px]">
        <div
          v-for="(speaker, index) in speakers"
          :key="speaker._id"
          :data-carousel-item="index == 0"
          class="absolute p-4 duration-700 bg-white h-[364px]"
        >
          <div class="p-4 border border-gray-200 rounded-lg">
            <img
              class="object-cover w-full h-48 mb-6 rounded-lg"
              :src="speaker.profile_pic[0].url"
              alt=""
            />
            <div>
              <h5 class="mb-3 text-lg font-bold leading-tight text-gray-900">
                {{ speaker.full_name }}
              </h5>
              <p class="text-sm font-normal text-gray-500">{{ speaker.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  </div>
</template>

<script setup>
const props = defineProps({ speakers: Array });

import SpeakerCard from "@/components/SpeakerCard.vue";
import Carousel from "@/components/Carousel.vue";
</script>
