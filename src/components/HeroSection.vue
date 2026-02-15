<script setup lang="ts">
import BriefcaseIcon from 'vue-material-design-icons/Briefcase.vue'
import HeartIcon from 'vue-material-design-icons/Heart.vue'
import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue'
import SocialLink from './SocialLink.vue'
</script>

<template>
  <section>
    <h1 class="hero-title">Shade4827</h1>
    <div class="hero-inner">
      <img class="avatar" src="@/assets/icon.png" alt="Shade4827 Icon" />
      <div class="hero-content">
        <p class="name">かげろん</p>
        <p class="description">
          <span class="icon"><BriefcaseIcon /></span>Webエンジニア
        </p>
        <p class="description">
          <span class="icon"><MapMarkerIcon /></span>日本, 北海道
        </p>
        <p class="description">
          <span class="icon"><HeartIcon /></span>カードゲーム(<a
            href="https://www.yugioh-card.com/japan/"
            target="_blank"
            rel="noopener noreferrer"
            >遊戯王</a
          >,
          <a href="https://mtg-jp.com/" target="_blank" rel="noopener noreferrer"
            >マジック：ザ・ギャザリング</a
          >), コミュニティ活動
        </p>
        <SocialLink class="social-link" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}
.avatar {
  width: 192px;
  height: 192px;
  object-fit: cover;
  border-radius: 12px;
  flex: 0 0 auto;
}
.hero-content {
  min-width: 0;
  display: flex;
  flex-direction: column;
  background-color: #696969;
  padding: 1rem;
  border-radius: 8px;
  height: 192px;
}
.hero-title {
  margin: 0 0 1rem 0;
  font-weight: 700;
  font-size: 1.5rem;
  border-bottom: 2px solid #fff;
}
.name {
  margin: 0 0 1rem 0;
  font-weight: 600;
  font-size: 24px;
}
.description {
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  font-size: 16px;
}
.icon {
  display: inline-flex;
  vertical-align: middle;
  margin-right: 0.5rem;
}
.social-link {
  margin-top: 1rem;
  margin-left: auto;
}

@media (min-width: 640px) {
  .avatar {
    width: 256px;
    height: 256px;
  }
  .hero-inner {
    flex-wrap: nowrap;
    gap: 3rem;
  }
  .hero-content {
    height: 256px;
  }
}
</style>
