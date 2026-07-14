export function useSeo(options: { title: string; description: string; path?: string; image?: string; type?: 'website' | 'article' }) {
  const baseUrl = 'https://treinosfit.shop'
  const fullPath = options.path ? `${baseUrl}${options.path}` : baseUrl
  const defaultImage = 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80'
  const image = options.image || defaultImage

  const meta = [
    { name: 'description', content: options.description },
    { property: 'og:title', content: options.title },
    { property: 'og:description', content: options.description },
    { property: 'og:url', content: fullPath },
    { property: 'og:type', content: options.type || 'website' },
    { property: 'og:image', content: image },
    { name: 'twitter:title', content: options.title },
    { name: 'twitter:description', content: options.description },
    { name: 'twitter:image', content: image }
  ]

  useHead({
    title: options.title,
    meta,
    link: [{ rel: 'canonical', href: fullPath }]
  })
}
