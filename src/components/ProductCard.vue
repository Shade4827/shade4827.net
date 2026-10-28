<script setup lang="ts">
import GithubIcon from './icons/GithubIcon.vue'
import OpenInNewIcon from 'vue-material-design-icons/OpenInNew.vue'
import type { Product } from '@/types/product'

const { product } = defineProps<{ product: Product }>()
</script>

<template>
  <article class="product-card">
    <h3 class="product-name">{{ product.name }}</h3>
    <p class="product-desc">{{ product.description }}</p>
    <div class="product-links">
      <a
        class="product-link"
        :href="product.repositoryUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon :size="18" fill="currentColor" />
        <span>GitHub</span>
      </a>
      <a
        v-if="product.siteUrl"
        class="product-link"
        :href="product.siteUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <OpenInNewIcon :size="18" />
        <span>サイト</span>
      </a>
    </div>
  </article>
</template>
