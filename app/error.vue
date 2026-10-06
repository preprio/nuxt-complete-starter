<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()
</script>

<template>
  <NavBar />
  <div class="mx-auto max-w-8xl p-spacing py-20 text-center text-secondary-700">
    <h1 class="text-5xl font-medium">{{ error.statusCode }}</h1>
    <p class="mt-4">{{ error.statusCode === 404 ? 'This page could not be found.' : 'Something went wrong.' }}</p>
  </div>
</template>
