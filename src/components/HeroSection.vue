<script setup lang="ts">
import SocialLink from './SocialLink.vue'
import { useReveal } from '@/composables/useReveal'

const { el, visible } = useReveal()
</script>

<template>
  <header ref="el" class="hero reveal block" :class="{ 'is-visible': visible }">
    <div class="shell hero-grid">
      <div class="portrait">
        <img src="@/assets/icon.png" width="1500" height="1300" alt="Shade4827 Icon" />
      </div>
      <div class="hero-copy">
        <p class="hero-handle">Shade4827</p>
        <h1 class="identity">
          <span class="who">かげろん</span>
          <span class="sep">/</span>
          <span class="meta">Webエンジニア</span>
          <span class="sep">/</span>
          <span class="meta">日本, 北海道</span>
        </h1>
        <p class="hero-bio">
          カードゲーム(<a
            href="https://www.yugioh-card.com/japan/"
            target="_blank"
            rel="noopener noreferrer"
            >遊戯王</a
          >,
          <a href="https://mtg-jp.com/" target="_blank" rel="noopener noreferrer"
            >マジック：ザ・ギャザリング</a
          >), コミュニティ活動
        </p>
        <SocialLink />
      </div>
    </div>
  </header>
</template>
