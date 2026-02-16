import type { Product } from '@/types/product'

export const useProduct = () => {
  const products: Product[] = [
    {
      name: 'MomirDraw',
      description:
        'マジック：ザ・ギャザリングの対戦フォーマットの1つであるモミール・ベーシックのためのカード抽選Webアプリケーションです。',
      repositoryUrl: 'https://github.com/Shade4827/MomirDraw',
      siteUrl: 'https://shade4827.github.io/MomirDraw/',
    },
  ]

  return {
    products,
  }
}
