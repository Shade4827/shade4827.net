import type { SlideData } from '@/types/slide'

export const useSlide = () => {
  const slideList: SlideData[] = [
    {
      title: '質問する場はどこにある ~ちょっと失敗したかも編~',
      description: 'TechRAMEN 2024 Conference 前夜祭で発表しました。',
      link: 'https://www.docswell.com/slide/KJ4GP4/embed',
    },
    {
      title: '【大募集】自宅リモートワークで 集中して進捗を出す技術【教えて】',
      description: 'TechRAMEN 2024 Conference 前夜祭で発表しました。',
      link: 'https://www.docswell.com/slide/K4V31Y/embed',
    },
    {
      title: '技術に自信がなくても、好きな気持ちだけでコミュニティ活動はできる',
      description: 'TechRAMEN 2025 Conferenceで発表しました。',
      link: 'https://www.docswell.com/slide/KE8QM8/embed',
    },
  ]

  return {
    slideList,
  }
}
