<script setup lang="ts">
withDefaults(defineProps<{ align?: 'left' | 'right' }>(), { align: 'left' })
</script>

<template>
  <section class="bg-primary-50">
    <div class="mx-auto max-w-8xl p-spacing py-10 lg:py-10 xl:py-20">
      <div class="flex flex-col items-start md:items-center md:flex-row gap-8 xl:gap-28 text-secondary-700">
        <div class="order-first basis-1/2" :class="align === 'right' ? 'md:order-last' : 'md:order-none'">
          <div class="rounded-2xl w-full aspect-[29/19] bg-primary-100"></div>
        </div>
        <div class="basis-1/2">
          <h2 class="text-mb-4xl lg:text-5xl font-medium text-secondary-700 text-balance">
            Feature heading
          </h2>
          <p class="text-lg mt-4 xl:mt-6 font-medium text-balance">
            A short text that explains the feature.
          </p>
          <a href="#"><Button>Learn more</Button></a>
        </div>
      </div>
    </div>
  </section>
</template>
