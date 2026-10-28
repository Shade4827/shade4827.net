<script setup lang="ts">
import { useReveal } from '@/composables/useReveal'

const { el, visible } = useReveal()
</script>

<template>
  <footer ref="el" class="site-footer reveal" :class="{ 'is-visible': visible }">
    <div class="shell">
      <p>© 2026 Shade4827. All rights reserved.</p>
    </div>
  </footer>
</template>
