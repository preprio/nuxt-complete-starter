<template>
  <div class="container mx-auto md:px-0">
    <Banner 
      title="Live stream pattern"
      copy="A common UX pattern for live stream events that leverages the live stream features in Prepr. This pattern shows not only live events, but also upcoming and recorded live streams. Learn more about <a href='https://docs.prepr.io/managing-content/live-video-stream'>live streaming in Prepr</a> on our Documentation site."
      url1="https://docs.prepr.io/create-schema/live-stream-pattern/"
    />
    <Hero :title="LiveEvent.title" :description="LiveEvent.heading">
      <LiveBadge size="lg" />
    </Hero>
    <div class="grid gap-8 overflow-hidden rounded-lg">
      <mux-video
        ref="video"
        class="flex w-full rounded-lg"
        :playback-id="LiveEvent.live_stream[0].playback_id"
        :metadata-video-id="LiveEvent.live_stream[0].playback_id"
        loop
        stream-type="live"
        controls
        autoplay
      ></mux-video>
    </div>
    <div class="grid grid-cols-2 gap-1 md:gap-8">
      <Speakers :speakers="LiveEvent.speakers" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { GetStreamBySlug } from "@/queries/preprQueries";

import LiveBadge from "@/components/Badges/LiveBadge.vue";
import Speakers from "@/components/Speakers.vue";

const route = useRoute();

const video = ref(null);

onMounted(() => {
  video.value
    .play()
    .then(() => {
      console.log("autoplay started");
    })
    .catch((error) => {
      console.log("video:", error);
    });
});

const { data } = await useAsyncQuery(GetStreamBySlug, {
  slug: route.params.slug,
});

const { LiveEvent } = data.value;
</script>

<style scoped>
mux-player {
  aspect-ratio: 16 / 9;
}

mux-video::part(video) {
  border-radius: 0.5rem;
}
</style>
