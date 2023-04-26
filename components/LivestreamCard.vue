<template>
  <nuxt-link v-if="event" append :to="`/livestream/${type}/${event._slug}`" class="cursor-pointer">
    <article class="flex flex-col transition-shadow bg-white border rounded-lg shadow-md hover:shadow-lg md:flex-row">
      <img class="hidden object-cover w-full h-64 rounded-t-lg md:flex md:h-44 md:w-64 md:rounded-none md:rounded-l-lg" :src="image" alt="" />
      <div class="flex flex-col justify-between p-4 md:p-5 grow">
        <div class="flex items-center justify-between mb-2 text-gray-500">
          <LiveBadge v-if="type == 'live'" />
          <RecordedBadge v-if="type == 'recorded'" />
          <UpcomingBadge v-if="type == 'upcoming'" />
          <span v-if="type !== 'live'" class="text-sm">{{ streamDate }}</span>
        </div>
        <h3 class="mb-1 text-base font-bold tracking-tight text-gray-900 md:text-xl dark:text-white">
          <a href="#">{{ event.title }}</a>
        </h3>
        <p class="w-full mb-5 text-sm font-light text-gray-500 dark:text-gray-400">{{ event.heading }}</p>
        <div class="flex items-center justify-between">
          <div class="flex -space-x-2">
            <img v-for="speaker in event.speakers" :key="speaker.full_name" class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800" :src="speaker.profile_pic[0].url" :alt="`${speaker.full_name} profile image`" />
          </div>
          <a href="#notify" class="inline-flex items-center text-sm font-semibold leading-tight md:text-base text-violet-600 hover:underline dark:text-violet-500">
            {{ linkText }}
            <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
import LiveBadge from '@/components/Badges/LiveBadge.vue'
import RecordedBadge from '@/components/Badges/RecordedBadge.vue'
import UpcomingBadge from '@/components/Badges/UpcomingBadge.vue'

export default {
  components: {
    LiveBadge,
    RecordedBadge,
    UpcomingBadge,
  },
  props: {
    event: Object,
    type: String,
  },
  computed: {
    image() {
      return this.event.cover[0].url
    },
    streamDate() {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(this.event.start_day_and_time).toLocaleDateString('en-US', options)
    },
    linkText() {
      switch (this.type) {
        case 'live':
          return 'Watch now'
        case 'upcoming':
          return 'Notify me'
        default:
          return 'Watch now'
      }
    },
  },
}
</script>
