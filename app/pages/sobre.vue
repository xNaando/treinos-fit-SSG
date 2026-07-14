<script setup lang="ts">
const siteUrl = 'https://xNaando.github.io/treinos-fit-SSG'

useSeo({
  title: 'Sobre - Treinos em Casa',
  description: 'Conheça o Treinos em Casa, um guia acessível para quem quer se exercitar sem academia ou equipamentos caros.',
  path: '/sobre'
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Sobre o Treinos em Casa',
  url: `${siteUrl}/sobre`,
  description: 'Guia acessível para quem quer se exercitar sem academia ou equipamentos caros.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Treinos em Casa',
    url: siteUrl,
    description: 'Guia completo de treinos em casa para todos os níveis.'
  }
})
</script>

<template>
  <section>
    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ol>
        <li><NuxtLink to="/">Início</NuxtLink></li>
        <li aria-current="page">Sobre</li>
      </ol>
    </nav>

    <div class="sobre">
      <img
        src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=900&q=80"
        alt="Pessoas treinando em casa de forma saudável"
        class="sobre-image"
        width="900"
        height="500"
        loading="eager"
      />
      <div class="sobre-content">
        <h1>Sobre o Treinos em Casa</h1>
        <p>
          O <strong>Treinos em Casa</strong> é um guia simples e acessível para quem quer se exercitar
          sem precisar de academia ou equipamentos caros.
        </p>
        <p>
          Nosso objetivo é democratizar o acesso à atividade física, oferecendo rotinas claras,
          seguras e eficientes para todos os níveis: iniciante, intermediário e avançado.
        </p>
        <p>
          Todos os treinos podem ser feitos em casa, com o peso do próprio corpo e pouco espaço.
          A consistência é mais importante do que a intensidade extrema.
        </p>
        <CheckoutButton>Conheça o programa completo</CheckoutButton>
      </div>
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

.sobre {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
}

@media (min-width: 768px) {
  .sobre {
    grid-template-columns: 1fr 1fr;
  }
}

.sobre-image {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: var(--radius);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.35);
}

.sobre-content h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1rem;
}

.sobre-content p {
  line-height: 1.7;
  margin-bottom: 1rem;
  color: var(--color-muted);
}

.sobre-content strong {
  color: var(--color-text);
}
</style>
