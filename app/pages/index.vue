<script setup lang="ts">
import { modalidades } from '~/data/modalidades'

const siteUrl = 'https://treinosfit.shop'

useSeo({
  title: 'Treinos em Casa - Descubra os Benefícios de se Exercitar em Casa',
  description: 'Saiba por que fazer exercícios físicos em casa é essencial para a saúde. Conheça modalidades, benefícios e comece a cuidar do seu corpo hoje mesmo.',
  path: '/'
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Treinos em Casa',
  url: siteUrl,
  description: 'Guia completo sobre os benefícios de treinar em casa e as melhores modalidades de exercício físico.',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/modalidades?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
})
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Treinos em Casa</h1>
      <p class="subtitle">
        Cuidar da saúde não precisa de academia. Descubra como o exercício físico em casa pode transformar o seu corpo, a sua mente e a sua qualidade de vida.
      </p>
      <div class="hero-actions">
        <NuxtLink to="/modalidades" class="btn">Conhecer modalidades</NuxtLink>
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

  <section class="beneficios" aria-labelledby="beneficios-titulo">
    <h2 id="beneficios-titulo">Por que treinar em casa?</h2>
    <p class="section-desc">
      Praticar atividade física em casa é uma escolha prática, econômica e eficiente para quem quer viver com mais saúde.
    </p>
    <div class="grid">
      <article class="card">
        <h3>Melhora a saúde cardiovascular</h3>
        <p>Exercícios regulares fortalecem o coração, reduzem a pressão arterial e melhoram a circulação sanguínea.</p>
      </article>
      <article class="card">
        <h3>Reduz o estresse e a ansiedade</h3>
        <p>A prática física libera endorfinas, substâncias que promovem bem-estar e ajudam no equilíbrio emocional.</p>
      </article>
      <article class="card">
        <h3>Ajuda no controle do peso</h3>
        <p>Queimar calorias em casa é possível e eficiente, especialmente quando aliado a uma alimentação equilibrada.</p>
      </article>
      <article class="card">
        <h3>Aumenta a disposição do dia a dia</h3>
        <p>Quem se exercita regularmente sente mais energia, melhora a qualidade do sono e ganha produtividade.</p>
      </article>
      <article class="card">
        <h3>Fortalece músculos e ossos</h3>
        <p>Atividades de força e resistência ajudam a prevenir dores, lesões e doenças como a osteoporose.</p>
      </article>
      <article class="card">
        <h3>Pode ser feito por qualquer pessoa</h3>
        <p>Existem modalidades para todos os níveis e objetivos, sem necessidade de equipamentos caros.</p>
      </article>
    </div>
  </section>

  <section class="destaques" aria-labelledby="destaques-titulo">
    <h2 id="destaques-titulo">Modalidades em destaque</h2>
    <p class="section-desc">Conheça diferentes formas de treinar em casa e escolha a que combina com você.</p>
    <div class="grid">
      <article v-for="modalidade in modalidades.slice(0, 3)" :key="modalidade.slug" class="card">
        <img
          :src="modalidade.imagem"
          :alt="modalidade.altImagem"
          class="card-image"
          width="400"
          height="250"
          loading="lazy"
        />
        <div class="card-body">
          <h3>{{ modalidade.nome }}</h3>
          <p>{{ modalidade.resumo }}</p>
          <NuxtLink :to="`/modalidades#${modalidade.slug}`" class="btn" :aria-label="`Saiba mais sobre ${modalidade.nome}`">Saiba mais</NuxtLink>
        </div>
      </article>
    </div>
  </section>

  <section class="cta-final" aria-labelledby="cta-titulo">
    <h2 id="cta-titulo">Quer um plano completo para resultados mais rápidos?</h2>
    <p>Acesse nosso programa completo de treinos em casa e comece a transformar sua rotina com orientação profissional.</p>
    <CheckoutButton>Quero resultados mais rápidos</CheckoutButton>
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

.beneficios,
.destaques {
  padding: 2rem 0;
}

.beneficios h2,
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

.card-body p {
  color: var(--color-muted);
}

.beneficios .card {
  padding: 1.5rem;
}

.beneficios .card p {
  color: var(--color-muted);
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
