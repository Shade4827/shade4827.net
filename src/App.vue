<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import SkillSection from './components/SkillSection.vue'
import ProductSection from './components/ProductSection.vue'
import ActivitySection from './components/ActivitySection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="ambient" aria-hidden="true">
    <span class="blob blob-a"></span>
    <span class="blob blob-b"></span>
    <span class="blob blob-c"></span>
    <span class="blob blob-d"></span>
  </div>
  <HeroSection />
  <main>
    <SkillSection />
    <ProductSection />
    <ActivitySection />
  </main>
  <FooterSection />
</template>
