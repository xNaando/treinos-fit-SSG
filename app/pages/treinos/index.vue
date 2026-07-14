<script setup lang="ts">
import { treinos } from '~/data/treinos'

const siteUrl = 'https://xNaando.github.io/treinos-fit-SSG'

useSeo({
  title: 'Treinos em Casa - Escolha seu Treino Ideal',
  description: 'Veja todos os treinos em casa para iniciantes, intermediários e avançados. Escolha o seu e comece hoje!',
  path: '/treinos'
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Todos os treinos',
  url: `${siteUrl}/treinos`,
  description: 'Lista completa de treinos em casa para todos os níveis.',
  hasPart: treinos.map(t => ({
    '@type': 'Article',
    headline: t.titulo,
    url: `${siteUrl}/treinos/${t.slug}`,
    image: t.imagem,
    description: t.descricao
  }))
})
</script>

<template>
  <section>
    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li><NuxtLink to="/">Início</NuxtLink></li>
        <li aria-current="page">Treinos</li>
      </ol>
    </nav>
    <h1>Todos os treinos</h1>
    <p class="intro">Escolha o treino ideal para o seu nível e objetivo.</p>
    <div class="cta">
      <p>Quer acesso a todos os treinos organizados em um plano completo?</p>
      <CheckoutButton />
    </div>
    <div class="grid">
      <article v-for="treino in treinos" :key="treino.slug" class="card">
        <img
          :src="treino.imagem"
          :alt="treino.altImagem"
          class="card-image"
          width="400"
          height="250"
          loading="lazy"
        />
        <div class="card-body">
          <h2>{{ treino.titulo }}</h2>
          <p class="meta">
            <span class="nivel">{{ treino.nivel }}</span>
            <span>{{ treino.duracao }}</span>
          </p>
          <p>{{ treino.descricao }}</p>
          <NuxtLink :to="`/treinos/${treino.slug}`" class="btn" :aria-label="`Ver treino ${treino.titulo}`">Ver treino</NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.breadcrumb {
  margin-bottom: 1.5rem;
  color: var(--color-muted);
  font-size: 0.875rem;
}

.breadcrumb ol {
  display: flex;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.breadcrumb li:not(:last-child)::after {
  content: '›';
  margin-left: 0.5rem;
  color: var(--color-muted);
}

.breadcrumb a {
  color: var(--color-muted);
  text-decoration: none;
}

.breadcrumb a:hover {
  color: var(--color-accent);
}

.intro {
  color: var(--color-muted);
  margin-bottom: 1rem;
}

.cta {
  margin-bottom: 1.5rem;
  padding: 1.25rem;
  background: var(--color-surface);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius);
}

.cta p {
  margin: 0 0 1rem;
  color: var(--color-muted);
}

.card {
  overflow: hidden;
  padding: 0;
}

.card-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.card-body {
  padding: 1.5rem;
}

.card-body h2 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.nivel {
  background: var(--color-accent);
  color: #fff;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 600;
}

.meta {
  display: flex;
  gap: 1rem;
  align-items: center;
  color: var(--color-muted);
  font-size: 0.875rem;
  margin-bottom: 1rem;
}
</style>
