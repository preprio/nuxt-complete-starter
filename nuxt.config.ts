import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts'],
  css: ['~/assets/css/main.css'],
  // @nuxt/fonts finds the Ubuntu font in main.css and self-hosts it.
  fonts: {
    defaults: { weights: [400, 700] },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    // Server-only: set with NUXT_PREPR_GRAPHQL_URL in .env or on your host.
    preprGraphqlUrl: '',
    // 'preview' shows the Prepr preview toolbar and lets it override segments
    // and A/B variants. Set with NUXT_PREPR_ENV.
    preprEnv: 'production',
  },
})
