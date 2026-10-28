<script setup lang="ts">
import SectionHeading from './SectionHeading.vue'
import { useReveal } from '@/composables/useReveal'

const { el, visible } = useReveal()

const workSkills = ['JavaScript / TypeScript', 'Vue.js', 'Nuxt', 'Ruby on Rails', 'CakePHP (2.x)']
const personalSkills = ['C', 'C++', 'Python', 'Unity', 'Svelte']
</script>

<template>
  <section ref="el" class="reveal block" :class="{ 'is-visible': visible }">
    <div class="shell">
      <SectionHeading en="Skills" ja="技術" />
      <div class="skill-groups">
        <div>
          <h3 class="group-label work">業務で利用</h3>
          <ul class="chips">
            <li v-for="skill in workSkills" :key="skill" class="chip chip-work">{{ skill }}</li>
          </ul>
        </div>
        <div>
          <h3 class="group-label personal">個人で利用</h3>
          <ul class="chips">
            <li v-for="skill in personalSkills" :key="skill" class="chip chip-personal">
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
      <p class="site-note">
        このサイトは
        <a href="https://ja.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a>
        を利用して作成しています
        <a href="https://github.com/Shade4827/portfolio" rel="noopener noreferrer">GitHub</a>
      </p>
    </div>
  </section>
</template>
