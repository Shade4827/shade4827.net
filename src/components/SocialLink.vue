<script setup lang="ts">
import GitHubIcon from './icons/GithubIcon.vue'
import XIcon from './icons/XIcon.vue'
import NoteEditIcon from 'vue-material-design-icons/NoteEdit.vue'
</script>

<template>
  <ul class="social-list">
    <li>
      <a
        class="icon-btn"
        href="https://x.com/shade4827"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (@shade4827)"
      >
        <XIcon :size="18" fill="currentColor" />
      </a>
    </li>
    <li>
      <a
        class="icon-btn"
        href="https://github.com/Shade4827"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <GitHubIcon :size="18" fill="currentColor" />
      </a>
    </li>
    <li>
      <a
        class="icon-btn"
        href="https://note.com/shade4827"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="note"
      >
        <NoteEditIcon :size="20" />
      </a>
    </li>
  </ul>
</template>
