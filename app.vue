<template>
  <div class="min-h-screen pt-24 antialiased md:pt-0">
    <Nav />
    <NuxtLoadingIndicator color="#4338CA" />
    <NuxtPage />
    <Footer />
    <DefaultPopup />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import DefaultPopup from "@/components/DefaultPopup.vue";

export default {
  components: {
    Nav,
    Footer,
    DefaultPopup,
  },
};
</script>
