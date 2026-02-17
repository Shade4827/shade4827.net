<script setup lang="ts">
import GitHubIcon from './icons/GithubIcon.vue'
import XIcon from './icons/XIcon.vue'
import NoteEditIcon from 'vue-material-design-icons/NoteEdit.vue'
</script>

<template>
  <div class="flex items-center gap-4">
    <a href="https://x.com/shade4827" target="_blank" rel="noopener noreferrer">
      <XIcon size="24" />
    </a>
    <a href="https://github.com/Shade4827" target="_blank" rel="noopener noreferrer">
      <GitHubIcon size="24" />
    </a>
    <a href="https://note.com/shade4827" target="_blank" rel="noopener noreferrer">
      <NoteEditIcon />
    </a>
  </div>
</template>
