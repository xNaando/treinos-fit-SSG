export function useSeo(options: { title: string; description: string; path?: string }) {
  const baseUrl = 'https://xNaando.github.io/treinos-fit-SSG'
  const fullPath = options.path ? `${baseUrl}${options.path}` : baseUrl

  useHead({
    title: options.title,
    meta: [
      { name: 'description', content: options.description },
      { property: 'og:title', content: options.title },
      { property: 'og:description', content: options.description },
      { property: 'og:url', content: fullPath },
      { name: 'twitter:title', content: options.title },
      { name: 'twitter:description', content: options.description }
    ],
    link: [{ rel: 'canonical', href: fullPath }]
  })
}
