<script setup lang="ts">
defineProps<{
  en: string
  ja: string
}>()
</script>

<template>
  <h2 class="section-title">
    <span class="section-en">{{ en }}</span>
    <span class="section-ja">{{ ja }}</span>
  </h2>
</template>
