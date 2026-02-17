<script setup lang="ts">
import OpenInNewIcon from 'vue-material-design-icons/OpenInNew.vue'
</script>

<template>
  <section>
    <h2 class="text-xl font-bold mb-4">Activities</h2>

    <h3 class="font-semibold mb-2">スタッフ参加</h3>
    <ul class="list-disc list-inside pl-0 mb-4">
      <li class="my-1">
        <a href="https://event.ospn.jp/osc2024-do/" target="_blank" rel="noopener noreferrer">
          Open Source Conference Hokkaido 2024
        </a>
        当日スタッフ
      </li>
      <li class="my-1">
        <a href="https://techramenconf.net/2024/" target="_blank" rel="noopener noreferrer"
          >TechRAMEN 2024 Conference
        </a>
        当日スタッフ
      </li>
      <li class="my-1">
        <a href="https://kinoko-conf.dev/2025/" target="_blank" rel="noopener noreferrer">
          エンジニアがこの先生きのこるためのカンファレンス2025
        </a>
        当日スタッフ
      </li>
      <li class="my-1">
        <a href="https://techramenconf.net/2025/" target="_blank" rel="noopener noreferrer">
          TechRAMEN 2025 Conference
        </a>
        コアスタッフ
      </li>
      <li class="my-1">
        <a href="https://www.frontend-conf.jp/" target="_blank" rel="noopener noreferrer">
          フロントエンドカンファレンス北海道 2025
        </a>
        コアスタッフ
      </li>
    </ul>

    <h3 class="font-semibold mb-2">登壇</h3>
    <p class="mb-4">
      docswell上に資料をアップロードしています。
      <a href="https://www.docswell.com/user/shade4827" target="_blank" rel="noopener noreferrer">
        <OpenInNewIcon class="inline-block w-4 h-4 ml-1" />
      </a>
      <br />
      これまでのコミュニティ活動の振り返りや仕事の進め方に関する内容が多いです。
    </p>

    <h3 class="font-semibold mb-2">登壇(資料なし)</h3>
    <ul class="list-disc list-inside pl-0">
      <li>
        <a
          href="https://www.city.sapporo.jp/somu/tokyo/event/20260128_event.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          札幌市ビジネスセッション＆交流会「エンジニアはなぜ札幌を選ぶのか ～人と企業が動く理由～」
        </a>
        <br />
        地方から札幌に移住したエンジニアとして札幌の魅力と技術コミュニティについてお話ししました。
      </li>
    </ul>
  </section>
</template>
