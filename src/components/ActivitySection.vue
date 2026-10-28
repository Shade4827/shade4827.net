<script setup lang="ts">
import SectionHeading from './SectionHeading.vue'
import { useReveal } from '@/composables/useReveal'

const { el, visible } = useReveal()

type StaffRole = '当日スタッフ' | 'コアスタッフ'

interface StaffEvent {
  year: string
  name: string
  href: string
  role: StaffRole
}

const staffEvents: StaffEvent[] = [
  {
    year: '2024',
    name: 'Open Source Conference Hokkaido 2024',
    href: 'https://event.ospn.jp/osc2024-do/',
    role: '当日スタッフ',
  },
  {
    year: '2024',
    name: 'TechRAMEN 2024 Conference',
    href: 'https://techramenconf.net/2024/',
    role: '当日スタッフ',
  },
  {
    year: '2025',
    name: 'エンジニアがこの先生きのこるためのカンファレンス2025',
    href: 'https://kinoko-conf.dev/2025/',
    role: '当日スタッフ',
  },
  {
    year: '2025',
    name: 'TechRAMEN 2025 Conference',
    href: 'https://techramenconf.net/2025/',
    role: 'コアスタッフ',
  },
  {
    year: '2025',
    name: 'フロントエンドカンファレンス北海道 2025',
    href: 'https://www.frontend-conf.jp/',
    role: 'コアスタッフ',
  },
  {
    year: '2026',
    name: 'Open Source Conference Hokkaido 2026',
    href: 'https://event.ospn.jp/osc2026-do/',
    role: '当日スタッフ',
  },
  {
    year: '2026',
    name: 'フロントエンド・PHPカンファレンス北海道 2026',
    href: 'https://frontend-php-con.hokkaido.jp/',
    role: 'コアスタッフ',
  },
]

const badgeClass = (role: StaffRole) => (role === 'コアスタッフ' ? 'badge-core' : 'badge-day')
</script>

<template>
  <section ref="el" class="reveal block" :class="{ 'is-visible': visible }">
    <div class="shell">
      <SectionHeading en="Activities" ja="活動" />

      <h3 class="subhead"><span class="en">Staff</span>スタッフ参加</h3>
      <ol class="timeline">
        <li v-for="event in staffEvents" :key="event.href" class="timeline-item">
          <time class="timeline-year" :datetime="event.year">{{ event.year }}</time>
          <div class="timeline-main">
            <a class="timeline-link" :href="event.href" target="_blank" rel="noopener noreferrer">
              {{ event.name }}
            </a>
            <span class="badge" :class="badgeClass(event.role)">{{ event.role }}</span>
          </div>
        </li>
      </ol>

      <h3 class="subhead"><span class="en">Talks</span>登壇</h3>
      <div class="talk-note">
        <p>
          <a
            href="https://www.docswell.com/user/shade4827"
            target="_blank"
            rel="noopener noreferrer"
          >
            docswell
          </a>
          上に資料をアップロードしています。
        </p>
        <p>これまでのコミュニティ活動の振り返りや仕事の進め方に関する内容が多いです。</p>
        <p>
          Slidevで作成した資料は
          <a href="https://www.slides.shade4827.net" target="_blank" rel="noopener noreferrer"
            >こちら</a
          >
          にまとめています。
        </p>
      </div>

      <h3 class="subhead"><span class="en">Talks</span>登壇(資料なし)</h3>
      <ol class="timeline">
        <li class="timeline-item">
          <time class="timeline-year" datetime="2025">2025</time>
          <div class="timeline-main">
            <a
              class="timeline-link"
              href="https://fortee.jp/techramen-25-conf/proposal/4955be4a-6b41-4837-9f6c-d0ae30a500cd"
              target="_blank"
              rel="noopener noreferrer"
            >
              TechRAMEN 2025 Conference パネルディスカッション企画 ゆるいエンジニア相談室
              ～あずましいエンジニア人生のおくりかた
            </a>
          </div>
          <p class="timeline-desc">
            北海道に残り続けるエンジニア人生の送り方やキャリアについて相談する形式でパネルディスカッションをしました。
          </p>
        </li>
      </ol>
    </div>
  </section>
</template>
