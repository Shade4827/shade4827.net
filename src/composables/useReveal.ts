import { onBeforeUnmount, onMounted, ref } from 'vue'

export const useReveal = () => {
  const el = ref<HTMLElement | null>(null)
  const visible = ref(false)
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    const node = el.value
    if (!node) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      visible.value = true
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          visible.value = true
          observer?.disconnect()
        }
      },
      { rootMargin: '0px 0px -32px 0px', threshold: 0.12 },
    )
    observer.observe(node)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return { el, visible }
}
