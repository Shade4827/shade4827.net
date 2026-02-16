<script setup lang="ts">
import type { SlideData } from '@/types/slide'
const { slide } = defineProps<{ slide: SlideData }>()
</script>

<template>
  <div class="p-4 bg-[#696969] rounded text-white">
    <h4 class="text-lg font-semibold mb-2">{{ slide.title }}</h4>
    <p class="mb-4">{{ slide.description }}</p>
    <div class="relative w-full pt-[56.25%] rounded overflow-hidden">
      <iframe
        :src="slide.link"
        class="docswell-iframe absolute inset-0 w-full h-full"
        loading="lazy"
        allowfullscreen
        style="border: 1px solid #ccc"
      ></iframe>
    </div>
    <p class="mt-3 text-sm text-right">
      <a :href="slide.link" target="_blank" rel="noopener noreferrer">スライドを別タブで開く</a>
    </p>
  </div>
</template>
