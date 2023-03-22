<template>
  <div class="flex flex-col items-center justify-center w-full mt-10 text-6xl text-center">
    <div class="w-full mb-10">
      <h3 class="text-xl font-bold md:text-4xl">Live stream starts in</h3>
    </div>
    <div class="flex items-center justify-center w-full">
      <div class="w-20 px-2 py-3 mx-2 bg-white border border-gray-200 rounded-lg shadow-md md:mx-4 md:p-6 md:w-36">
        <div class="mb-2 text-xl font-bold md:text-6xl">{{ days }}</div>
        <div class="text-xs text-gray-500 md:text-sm">Days</div>
      </div>
      <div class="w-20 px-2 py-3 mx-2 bg-white border border-gray-200 rounded-lg shadow-md md:mx-4 md:p-6 md:w-36">
        <div class="mb-2 text-xl font-bold md:text-6xl">{{ hours }}</div>
        <div class="text-xs text-gray-500 md:text-sm">Hours</div>
      </div>
      <div class="w-20 px-2 py-3 mx-2 bg-white border border-gray-200 rounded-lg shadow-md md:mx-4 md:p-6 md:w-36">
        <div class="mb-2 text-xl font-bold md:text-6xl">{{ minutes }}</div>
        <div class="text-xs text-gray-500 md:text-sm">Minutes</div>
      </div>
      <div class="w-20 px-2 py-3 mx-2 bg-white border border-gray-200 rounded-lg shadow-md md:mx-4 md:p-6 md:w-36">
        <div class="mb-2 text-xl font-bold md:text-6xl">{{ seconds }}</div>
        <div class="text-xs text-gray-500 md:text-sm">Seconds</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    startdate: String,
  },
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  },
  mounted() {
    this.countDown()
  },
  methods: {
    countDown() {
      this.updateTime()
      // Update the count down every 1 second
      setInterval(() => {
        this.updateTime()
      }, 1000)
    },
    updateTime() {
      const countDownDate = new Date(this.startdate).getTime()
      const now = new Date().getTime()
      const distance = countDownDate - now
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24))
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000)
    },
  },
}
</script>
