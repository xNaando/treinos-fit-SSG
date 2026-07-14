<script setup lang="ts">
import { treinos } from '~/data/treinos'

const route = useRoute()
const siteUrl = 'https://xNaando.github.io/treinos-fit-SSG'
const treino = treinos.find(t => t.slug === route.params.slug)

if (!treino) {
  throw createError({ statusCode: 404, statusMessage: 'Treino não encontrado' })
}

useSeo({
  title: `${treino.titulo} - Treino em Casa`,
  description: treino.descricao,
  path: `/treinos/${treino.slug}`,
  image: treino.imagem
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: treino.titulo,
  url: `${siteUrl}/treinos/${treino.slug}`,
  image: treino.imagem,
  description: treino.descricao,
  author: {
    '@type': 'Organization',
    name: 'Treinos em Casa',
    url: siteUrl
  },
  publisher: {
    '@type': 'Organization',
    name: 'Treinos em Casa',
    url: siteUrl
  }
})
</script>

<template>
  <section>
    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li><NuxtLink to="/">Início</NuxtLink></li>
        <li><NuxtLink to="/treinos">Treinos</NuxtLink></li>
        <li aria-current="page">{{ treino.titulo }}</li>
      </ol>
    </nav>

    <header class="treino-header">
      <img
        :src="treino.imagem"
        :alt="treino.altImagem"
        class="treino-image"
        width="900"
        height="500"
        loading="eager"
      />
      <div class="treino-info">
        <h1>{{ treino.titulo }}</h1>
        <p class="meta">
          <span class="nivel">{{ treino.nivel }}</span>
          <span>{{ treino.duracao }}</span>
        </p>
        <p class="descricao">{{ treino.descricao }}</p>
      </div>
    </header>

    <div class="cta">
      <p>Quer um plano completo com esse e muitos outros treinos?</p>
      <CheckoutButton />
    </div>

    <h2>Exercícios do treino</h2>
    <ul class="exercicios">
      <li v-for="(exercicio, index) in treino.exercicios" :key="index" class="card">
        <strong>{{ exercicio.nome }}</strong>
        <div class="detalhes">
          <span>{{ exercicio.series }}</span>
          <span>Descanso: {{ exercicio.descanso }}</span>
        </div>
      </li>
    </ul>
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
  flex-wrap: wrap;
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

.treino-header {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .treino-header {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
}

.treino-image {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: var(--radius);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.35);
}

.treino-info h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1rem;
}

.meta {
  display: flex;
  gap: 1rem;
  align-items: center;
  color: var(--color-muted);
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.nivel {
  background: var(--color-accent);
  color: #fff;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 600;
}

.descricao {
  font-size: 1.125rem;
  margin-bottom: 0;
}

.cta {
  margin-bottom: 2rem;
  padding: 1.25rem;
  background: var(--color-surface);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius);
}

.cta p {
  margin: 0 0 1rem;
  color: var(--color-muted);
}

.exercicios {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 1rem;
}

.detalhes {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  color: var(--color-muted);
  font-size: 0.875rem;
}
</style>
