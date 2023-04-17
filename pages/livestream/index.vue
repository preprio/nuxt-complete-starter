<template>
  <div class="container mx-auto md:px-0">
    <Banner 
      title="Live stream pattern"
      copy="A common UX pattern for live stream events that leverages the live stream features in Prepr. This pattern shows not only live events, but also upcoming and recorded live streams. Learn more about <a href='https://docs.prepr.io/managing-content/live-video-stream'>live streaming in Prepr</a> on our Documentation site."
      url1="https://docs.prepr.io/create-schema/live-stream-pattern/"
    />
    <Hero
      title="Live Events"
      description="Through our live events, join our baking community and skill up on basic and advanced skills. Turn your baked goodies into unforgettable treats for your family, friends or customers."
    />
    <div class="grid gap-4 mb-12">
      <h3 class="text-xl font-bold md:text-2xl">Live</h3>
      <div class="grid gap-6">
        <LivestreamCard type="live" :event="live" />
      </div>
    </div>

    <div class="grid gap-4 mb-12">
      <h3 class="text-xl font-bold md:text-2xl">Upcoming</h3>
      <div class="grid gap-6">
        <div v-for="stream in upcoming" :key="stream._id" class="col-span-12">
          <LivestreamCard type="upcoming" :event="stream" />
        </div>
      </div>
    </div>

    <div class="grid gap-4">
      <h3 class="text-xl font-bold md:text-2xl">Recorded</h3>
      <div class="grid gap-6">
        <div v-for="stream in recorded" :key="stream._id" class="col-span-12">
          <LivestreamCard type="recorded" :event="stream" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFlowbite } from "@/helpers/flowbite";
import LivestreamCard from "@/components/LivestreamCard";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";

import {
  GetUpcomingLiveStreams,
  GetRecordedLiveStreams,
  GetStreamBySlug,
} from "@/queries/preprQueries";

const flowbite = useFlowbite();
const today = new Date().toJSON().slice(0, 10);

const liveQuery = await useAsyncQuery(GetStreamBySlug, {
  slug: "fall-bake-a-thon",
});

const upcomingQuery = await useAsyncQuery(GetUpcomingLiveStreams, {
  where: {
    start_day_and_time_gt: today,
  },
});

const recordedQuery = await useAsyncQuery(GetRecordedLiveStreams, {
  where: {
    start_day_and_time_lt: today,
  },
});


const live = liveQuery.data.value.LiveEvent;
const upcoming = upcomingQuery.data.value.LiveEvents.items;
const recorded = recordedQuery.data.value.LiveEvents.items;
</script>

<script setup></script>
