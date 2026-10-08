import { print } from 'graphql'
import { getPreprHeaders } from '@preprio/toolkit/nuxt'
import type { TypedDocumentNode } from '@graphql-typed-document-node/core'

// Runs a Prepr GraphQL query during server-side rendering. The result reaches
// the browser in the Nuxt payload, so the GraphQL URL stays on the server.
export function usePrepr<TResult, TVariables>(
  key: string,
  document: TypedDocumentNode<TResult, TVariables>,
  variables: TVariables,
) {
  // Prepr uses these headers (visitor ID, segments, A/B variant) to pick the right variant.
  const preprHeaders = getPreprHeaders(new Headers(useRequestHeaders())) as Record<string, string>

  return useAsyncData(key, async (nuxtApp) => {
    const { data, errors } = await $fetch<{ data: TResult, errors?: { message: string }[] }>(nuxtApp.$config.preprGraphqlUrl, {
      method: 'POST',
      headers: preprHeaders,
      body: { query: print(document), variables },
    })
    if (errors?.length) throw createError(errors[0]!.message)
    return data
  })
}
