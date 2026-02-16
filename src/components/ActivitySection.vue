<script setup lang="ts">
import SlideCard from './SlideCard.vue'
import { useSlide } from '@/composables/useSlide'
const { slideList } = useSlide()
</script>

<template>
  <section>
    <h2 class="text-xl font-bold mb-4">Activities</h2>

    <h3 class="font-semibold mb-2">スタッフ参加</h3>
    <ul class="list-disc list-inside pl-0 mb-4">
      <li>
        <a href="https://event.ospn.jp/osc2024-do/" target="_blank" rel="noopener noreferrer">
          Open Source Conference Hokkaido 2024
        </a>
        当日スタッフ
      </li>
      <li>
        <a href="https://techramenconf.net/2024/" target="_blank" rel="noopener noreferrer"
          >TechRAMEN 2024 Conference
        </a>
        当日スタッフ
      </li>
      <li>
        <a href="https://kinoko-conf.dev/2025/" target="_blank" rel="noopener noreferrer">
          エンジニアがこの先生きのこるためのカンファレンス2025
        </a>
        当日スタッフ
      </li>
      <li>
        <a href="https://techramenconf.net/2025/" target="_blank" rel="noopener noreferrer">
          TechRAMEN 2025 Conference
        </a>
        コアスタッフ
      </li>
      <li>
        <a href="https://www.frontend-conf.jp/" target="_blank" rel="noopener noreferrer">
          フロントエンドカンファレンス北海道 2025
        </a>
        コアスタッフ
      </li>
    </ul>

    <h3 class="font-semibold mb-2">登壇</h3>
    <div class="mb-4">
      <SlideCard
        v-for="slide in slideList"
        :key="slide.title"
        :title="slide.title"
        :description="slide.description"
        :link="slide.link"
        class="mb-4"
      />
    </div>

    <h3 class="font-semibold mb-2">登壇(資料なし)</h3>
    <ul class="list-disc list-inside pl-0">
      <li>
        <a href="https://www.city.sapporo.jp/somu/tokyo/event/20260128_event.html"
          >札幌市ビジネスセッション＆交流会「エンジニアはなぜ札幌を選ぶのか
          ～人と企業が動く理由～」</a
        >
      </li>
    </ul>
  </section>
</template>
