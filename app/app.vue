<script setup lang="ts">
import { extractAccessToken } from '@preprio/toolkit/nuxt'
import PreprTrackingPixel from '@preprio/toolkit/nuxt/components/PreprTrackingPixel'

// The GraphQL URL is server-only, so resolve the access token on the server.
// useState sends the value to the browser in the Nuxt payload.
const accessToken = useState<string>('prepr-access-token')
if (import.meta.server) accessToken.value = extractAccessToken(useRuntimeConfig().preprGraphqlUrl)

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
  <PreprTrackingPixel v-if="accessToken" :id="accessToken" />
</template>
