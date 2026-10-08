<script setup lang="ts">
import { extractAccessToken, getToolbarProps } from '@preprio/toolkit/nuxt'
import PreprToolbar from '@preprio/toolkit/nuxt/components/PreprToolbar'
import PreprTrackingPixel from '@preprio/toolkit/nuxt/components/PreprTrackingPixel'

useHead({
  htmlAttrs: { lang: 'en' },
  title: 'Prepr Nuxt complete starter',
  meta: [{ name: 'description', content: 'Showing the power of personalization and A/B testing' }],
})

// The GraphQL URL is server-only, so resolve these values on the server.
// useState sends them to the browser in the Nuxt payload.
const accessToken = useState<string>('prepr-access-token')
const toolbarProps = useState<Awaited<ReturnType<typeof getToolbarProps>> | null>('prepr-toolbar')

if (import.meta.server) {
  const { preprGraphqlUrl, preprEnv } = useRuntimeConfig()
  accessToken.value = extractAccessToken(preprGraphqlUrl)
  // getToolbarProps never throws: a failed segment fetch returns an empty list.
  toolbarProps.value = preprEnv === 'preview'
    ? await getToolbarProps(new Headers(useRequestHeaders()), preprGraphqlUrl)
    : null
}
</script>

<template>
  <NuxtRouteAnnouncer />
  <NavBar />
  <NuxtPage />
  <PreprTrackingPixel v-if="accessToken" :id="accessToken" />
  <PreprToolbar v-if="toolbarProps" v-bind="toolbarProps" />
</template>
