<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import { useProduct } from '@/composables/useProduct'
const { products } = useProduct()
</script>

<template>
  <section>
    <h2 class="text-xl font-bold mb-4">Products</h2>

    <div v-for="product in products" :key="product.name" class="bg-[#696969] p-4 rounded">
      <ProductCard :product="product" />
    </div>
  </section>
</template>
