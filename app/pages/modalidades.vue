<script setup lang="ts">
import { modalidades } from '~/data/modalidades'

const siteUrl = 'https://treinosfit.shop'

useSeo({
  title: 'Modalidades de Treino em Casa - Zumba, Pilates, HIIT e mais',
  description: 'Descubra as melhores modalidades de treino em casa: zumba, aeróbica, musculação, pilates, yoga, HIIT e mais. Veja benefícios, tempo ideal e calorias perdidas.',
  path: '/modalidades'
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Modalidades de Treino em Casa',
  url: `${siteUrl}/modalidades`,
  description: 'Lista completa de modalidades de treino em casa com benefícios, tempo ideal e calorias perdidas por minuto.',
  hasPart: modalidades.map(m => ({
    '@type': 'Article',
    headline: m.nome,
    url: `${siteUrl}/modalidades#${m.slug}`,
    image: m.imagem,
    description: m.resumo
  }))
})
</script>

<template>
  <section>
    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li><NuxtLink to="/">Início</NuxtLink></li>
        <li aria-current="page">Modalidades</li>
      </ol>
    </nav>

    <h1>Modalidades de treino em casa</h1>
    <p class="intro">
      Exercício físico em casa pode ser divertido, variado e eficiente. Conheça as principais modalidades, seus benefícios e quantas calorias você pode perder a cada minuto de prática.
    </p>

    <div class="cta">
      <p>Quer um plano completo com vídeos e rotinas organizadas para acelerar seus resultados?</p>
      <CheckoutButton>Quero resultados mais rápidos</CheckoutButton>
    </div>

    <div class="grid">
      <article
        v-for="modalidade in modalidades"
        :id="modalidade.slug"
        :key="modalidade.slug"
        class="card"
      >
        <img
          :src="modalidade.imagem"
          :alt="modalidade.altImagem"
          class="card-image"
          width="400"
          height="250"
          loading="lazy"
        />
        <div class="card-body">
          <h2>{{ modalidade.nome }}</h2>
          <p>{{ modalidade.descricao }}</p>

          <h3>Benefícios</h3>
          <ul>
            <li v-for="(beneficio, index) in modalidade.beneficios" :key="index">{{ beneficio }}</li>
          </ul>

          <div class="meta-grid">
            <div class="meta-item">
              <strong>Tempo ideal</strong>
              <span>{{ modalidade.tempoIdeal }}</span>
            </div>
            <div class="meta-item">
              <strong>Calorias por minuto</strong>
              <span>{{ modalidade.caloriasPorMinuto }}</span>
            </div>
          </div>

          <CheckoutButton>Quero começar agora</CheckoutButton>
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

h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  background: linear-gradient(135deg, #22c55e, #4ade80);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.intro {
  color: var(--color-muted);
  margin-bottom: 1rem;
  max-width: 800px;
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

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.card {
  overflow: hidden;
  padding: 0;
  scroll-margin-top: 6rem;
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
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

.card-body h3 {
  font-size: 1.1rem;
  margin: 1.5rem 0 0.75rem;
}

.card-body p {
  color: var(--color-muted);
}

.card-body ul {
  margin: 0 0 1.25rem;
  padding-left: 1.25rem;
  color: var(--color-muted);
}

.card-body li {
  margin-bottom: 0.5rem;
}

.meta-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.meta-item {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: var(--color-surface-2);
  border-radius: var(--radius);
}

.meta-item strong {
  color: var(--color-text);
  margin-bottom: 0.25rem;
}

.meta-item span {
  color: var(--color-muted);
  font-size: 0.875rem;
}
</style>
