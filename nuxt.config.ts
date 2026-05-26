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
      PREPR_GRAPHQL_URL: (process.env.PREPR_GRAPHQL_URL || 'https://graphql.prepr.io/ac_e54beab08406dd41fcdead2bef10364f442559f67fe86ebb0ac7aa6e3a1a4605') as string,
    },
  },
  plugins: [
    { src: './plugins/apollo.ts', mode: 'client' },
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: (process.env.PREPR_GRAPHQL_URL || 'https://graphql.prepr.io/ac_e54beab08406dd41fcdead2bef10364f442559f67fe86ebb0ac7aa6e3a1a4605') as string, // must be present but will be overridden in plugin
      },
    },
  }
});