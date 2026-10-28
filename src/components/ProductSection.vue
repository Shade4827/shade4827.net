<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import SectionHeading from './SectionHeading.vue'
import { useProduct } from '@/composables/useProduct'
import { useReveal } from '@/composables/useReveal'

const { products } = useProduct()
const { el, visible } = useReveal()
</script>

<template>
  <section ref="el" class="reveal block" :class="{ 'is-visible': visible }">
    <div class="shell">
      <SectionHeading en="Products" ja="制作" />
      <div class="product-list">
        <ProductCard v-for="product in products" :key="product.name" :product="product" />
      </div>
    </div>
  </section>
</template>
