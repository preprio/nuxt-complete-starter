<template>
  <div
    class="container p-10 mx-auto my-10 text-gray-700 bg-gray-100 rounded-xl"
  >
    <h2 class="mb-4 text-2xl font-bold">Oops, something went wrong</h2>
    <pre><code> {{ message }}</code></pre>
  </div>
</template>

<script setup>
const props = defineProps({ message: String });
</script>