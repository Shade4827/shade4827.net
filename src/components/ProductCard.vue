<script setup lang="ts">
import GithubIcon from './icons/GithubIcon.vue'
import OpenInNewIcon from 'vue-material-design-icons/OpenInNew.vue'
import type { Product } from '@/types/product'

const { product } = defineProps<{ product: Product }>()
</script>

<template>
  <div class="flex items-center mb-2">
    <h3 class="text-lg font-semibold m-0 mr-2">{{ product.name }}</h3>
    <a
      class="inline-flex items-center justify-center p-2 text-white hover:bg-[#808080] transition-colors"
      :href="product.repositoryUrl"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon size="20" />
    </a>
    <a
      v-if="product.siteUrl"
      class="inline-flex items-center justify-center p-2 text-white hover:bg-[#808080] transition-colors"
      :href="product.siteUrl"
      target="_blank"
      rel="noopener noreferrer"
    >
      <OpenInNewIcon />
    </a>
  </div>
  <p class="mb-4 text-white">
    {{ product.description }}
  </p>
</template>
