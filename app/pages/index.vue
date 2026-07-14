<script setup lang="ts">
import { treinos } from '~/data/treinos'

const siteUrl = 'https://xNaando.github.io/treinos-fit-SSG'

useSeo({
  title: 'Treinos em Casa - Guia Completo de Exercícios sem Equipamento',
  description: 'Descubra treinos em casa para todos os níveis. Sem academia, sem equipamento e sem desculpas. Comece hoje mesmo!',
  path: '/'
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Treinos em Casa',
  url: siteUrl,
  description: 'Guia completo de treinos em casa para todos os níveis.',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/treinos?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
})
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Treinos em Casa</h1>
      <p class="subtitle">
        Sem academia, sem equipamento e sem desculpas. Escolha um treino e comece hoje mesmo.
      </p>
      <div class="hero-actions">
        <NuxtLink to="/treinos" class="btn">Ver treinos</NuxtLink>
        <CheckoutButton>Quero resultados mais rápidos</CheckoutButton>
      </div>
    </div>
    <img
      src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80"
      alt="Pessoa fazendo exercício físico em casa"
      class="hero-image"
      width="1200"
      height="600"
      loading="eager"
    />
  </section>

  <section class="destaques" aria-labelledby="destaques-titulo">
    <h2 id="destaques-titulo">Treinos em destaque</h2>
    <p class="section-desc">Rotinas pensadas para quem quer treinar em casa com eficiência.</p>
    <div class="grid">
      <article v-for="treino in treinos.slice(0, 3)" :key="treino.slug" class="card">
        <img
          :src="treino.imagem"
          :alt="treino.altImagem"
          class="card-image"
          width="400"
          height="250"
          loading="lazy"
        />
        <div class="card-body">
          <h3>{{ treino.titulo }}</h3>
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

  <section class="cta-final" aria-labelledby="cta-titulo">
    <h2 id="cta-titulo">Quer um plano completo para resultados mais rápidos?</h2>
    <p>Acesse nosso programa completo de treinos em casa e transforme sua rotina.</p>
    <CheckoutButton>Comprar agora</CheckoutButton>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
  padding: 2rem 0 4rem;
}

@media (min-width: 768px) {
  .hero {
    grid-template-columns: 1fr 1fr;
  }
}

.hero h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  background: linear-gradient(135deg, #22c55e, #4ade80);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.25rem;
  color: var(--color-muted);
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hero-image {
  border-radius: var(--radius);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.35);
  object-fit: cover;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
}

.destaques {
  padding: 2rem 0;
}

.destaques h2 {
  margin-bottom: 0.5rem;
}

.section-desc {
  color: var(--color-muted);
  margin-bottom: 2rem;
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

.card-body h3 {
  margin-bottom: 0.75rem;
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

.cta-final {
  text-align: center;
  padding: 3rem 1.5rem;
  margin: 3rem 0;
  background: var(--color-surface);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius);
}

.cta-final h2 {
  margin-bottom: 1rem;
}

.cta-final p {
  color: var(--color-muted);
  margin-bottom: 1.5rem;
}
</style>
