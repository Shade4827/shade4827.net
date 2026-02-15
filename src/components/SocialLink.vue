<script setup lang="ts">
import GitHubIcon from './icons/GithubIcon.vue'
import XIcon from './icons/XIcon.vue'
</script>

<template>
  <div class="social-links">
    <a href="https://x.com/shade4827" target="_blank" rel="noopener noreferrer">
      <XIcon size="24" />
    </a>
    <a href="https://github.com/Shade4827" target="_blank" rel="noopener noreferrer">
      <GitHubIcon size="24" />
    </a>
  </div>
</template>

<style scoped>
.social-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
