// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: process.env.TARGET || "server",
  app: {
    head: {
      title: "Prepr Patterns",
      script: [
        {
          hid: "mux",
          src: "https://cdn.jsdelivr.net/npm/@mux/mux-video@0",
        },
        // {
        //   innerHTML: `! function (e, t, p, r, n, a, s) {
        //     e[r] || ((n = e[r] = function () {
        //         n.process ? n.process.apply(n, arguments) : n.queue.push(arguments)
        //     }).queue = [], n.t = +new Date, (a = t.createElement(p)).async = 1, a.src = "https://cdn.tracking.prepr.io/js/prepr.min.js?t=" + 864e5 * Math.ceil(new Date / 864e5), (s = t.getElementsByTagName(p)[0]).parentNode.insertBefore(a, s))
        // }(window, document, "script", "prepr"), prepr("init", "70857921ab59b2fe1bb34149c68d724f4e3cc1f2b9b921353e355fca22392dbf"), prepr("event", "pageload");`,
        //   type: "text/javascript",
        // },
      ],
    },
  },
  modules: ["@nuxtjs/apollo", "@nuxtjs/google-fonts"],
  apollo: {
    clients: {
      default: "./apollo/prepr.ts",
      asegment: "./apollo/asegment.ts",
      bsegment: "./apollo/bsegment.ts",
    },
  },
  runtimeConfig: {
    public: {
      PREPR_ACCESS_TOKEN: process.env.PREPR_ACCESS_TOKEN,
    },
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["flowbite"],
    },
  },
  build: {
    transpile: ["mux"],
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["mux-player"].includes(tag),
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
