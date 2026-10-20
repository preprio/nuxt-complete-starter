<script setup lang="ts">
withDefaults(defineProps<{ buttonStyle?: 'primary' | 'secondary' }>(), {
  buttonStyle: 'primary',
})
</script>

<template>
  <button
    class="flex rounded-full text-sm px-6 py-2.5 font-medium"
    :class="{
      'bg-primary-600 hover:bg-primary-700 text-white': buttonStyle === 'primary',
      'bg-white hover:bg-gray-50 text-secondary-700': buttonStyle === 'secondary',
    }"
  >
    <slot />
  </button>
</template>
