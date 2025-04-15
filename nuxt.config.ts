import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/apollo'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  runtimeConfig: {
    public: {
      PREPR_GRAPHQL_URL: process.env.PREPR_GRAPHQL_URL as string,
    },
  },
  plugins: [
    { src: './plugins/apollo.ts', mode: 'client' },
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.PREPR_GRAPHQL_URL as string, // must be present but will be overridden in plugin
      },
    },
  }
});