export function useSeo(options: { title: string; description: string; path?: string; image?: string }) {
  const baseUrl = 'https://treinosfit.shop'
  const fullPath = options.path ? `${baseUrl}${options.path}` : baseUrl

  const meta = [
    { name: 'description', content: options.description },
    { property: 'og:title', content: options.title },
    { property: 'og:description', content: options.description },
    { property: 'og:url', content: fullPath },
    { name: 'twitter:title', content: options.title },
    { name: 'twitter:description', content: options.description }
  ]

  if (options.image) {
    meta.push({ property: 'og:image', content: options.image })
    meta.push({ name: 'twitter:image', content: options.image })
  }

  useHead({
    title: options.title,
    meta,
    link: [{ rel: 'canonical', href: fullPath }]
  })
}
