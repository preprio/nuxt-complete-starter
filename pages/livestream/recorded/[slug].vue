<template>
  <div class="container mx-auto md:px-0">
    <Banner 
      title="Live stream pattern"
      copy="A common UX pattern for live stream events that leverages the live stream features in Prepr. This pattern shows not only live events, but also upcoming and recorded live streams. Learn more about <a href='https://docs.prepr.io/managing-content/live-video-stream'>live streaming in Prepr</a> on our Documentation site."
      url1="https://docs.prepr.io/create-schema/live-stream-pattern/"
    />
    <Hero :title="LiveEvent.title" :description="LiveEvent.heading">
      <RecordedBadge size="lg" />
    </Hero>
    <div class="grid gap-8 overflow-hidden rounded-lg">
      <mux-player
        v-if="LiveEvent.live_stream.length"
        class="flex w-full aspect-video"
        :playback-id="LiveEvent.live_stream[0].playback_id"
        metadata-video-id="video-id-54321"
        metadata-video-title="Vue 3: Episode 2"
        metadata-viewer-user-id="user-id-vue3007"
        stream-type="on-demand"
      />
    </div>
    <div class="grid grid-cols-2 gap-8">
      <Speakers :speakers="LiveEvent.speakers" />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { GetStreamBySlug } from "@/queries/preprQueries";

import RecordedBadge from "@/components/Badges/RecordedBadge.vue";
import Speakers from "@/components/Speakers.vue";

const route = useRoute();
const { data } = await useAsyncQuery(GetStreamBySlug, {
  slug: route.params.slug,
});

const { LiveEvent } = data.value;
</script>
