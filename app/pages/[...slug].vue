<script setup lang="ts">
import { GetPageBySlugDocument } from '~/gql/graphql'

const route = useRoute()
// The home page has no slug in the URL; in Prepr its slug is '/'.
const slug = (route.params.slug as string[] | undefined)?.join('/') || '/'

const { data } = await usePrepr(`page-${slug}`, GetPageBySlugDocument, { slug })

if (!data.value?.Page) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}
const page = data.value.Page
</script>

<template>
  <template v-for="(element, index) in page.content" :key="index">
    <HeroSection v-if="element.__typename === 'Hero'" :item="element" />
    <FeatureSection v-else-if="element.__typename === 'Feature'" :item="element" />
  </template>
</template>
