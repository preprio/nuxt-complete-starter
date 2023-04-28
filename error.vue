<template>
  <div class="mx-auto">
    <Nav />
    <ErrorMessage :message="error.message" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>
