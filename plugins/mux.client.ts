import * as mux from "@mux/mux-player";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(mux);
});
