<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'Prepr Nuxt complete starter',
  meta: [{ name: 'description', content: 'Showing the power of personalization and A/B testing' }],
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NavBar />
  <NuxtPage />
</template>
