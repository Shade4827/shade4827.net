<script setup lang="ts">
import BriefcaseIcon from 'vue-material-design-icons/Briefcase.vue'
import HeartIcon from 'vue-material-design-icons/Heart.vue'
import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue'
import SocialLink from './SocialLink.vue'
</script>

<template>
  <section>
    <h1 class="mb-4 font-bold text-xl border-b-2 border-white">Shade4827</h1>
    <div class="flex items-center justify-center gap-8 flex-wrap md:flex-nowrap md:gap-12">
      <img
        class="w-48 h-48 md:w-64 md:h-64 object-cover rounded-xl flex-shrink-0"
        src="@/assets/icon.png"
        alt="Shade4827 Icon"
      />
      <div class="min-w-0 flex flex-col bg-[#696969] p-4 md:p-6 rounded text-white">
        <p class="mb-4 font-semibold text-2xl text-white">かげろん</p>
        <p class="mb-2 text-white">
          <span class="inline-flex mr-2 flex-shrink-0"><BriefcaseIcon /></span>Webエンジニア
        </p>
        <p class="mb-2 text-white">
          <span class="inline-flex mr-2 flex-shrink-0"><MapMarkerIcon /></span>日本, 北海道
        </p>
        <p class="mb-2 text-white">
          <span class="inline-flex mr-2 flex-shrink-0"><HeartIcon /></span>カードゲーム(<a
            href="https://www.yugioh-card.com/japan/"
            target="_blank"
            rel="noopener noreferrer"
            class="underline dotted"
            >遊戯王</a
          >,
          <a
            href="https://mtg-jp.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="underline dotted"
            >マジック：ザ・ギャザリング</a
          >), コミュニティ活動
        </p>
        <SocialLink class="mt-4 ml-auto" />
      </div>
    </div>
  </section>
</template>
