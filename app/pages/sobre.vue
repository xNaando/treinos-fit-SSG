<script setup lang="ts">
const siteUrl = 'https://treinosfit.shop'

useSeo({
  title: 'Sobre - Treinos em Casa',
  description: 'Conheça o Treinos em Casa, um guia completo sobre exercícios físicos em casa, modalidades, benefícios e dicas para viver com mais saúde.',
  path: '/sobre'
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Sobre o Treinos em Casa',
  url: `${siteUrl}/sobre`,
  description: 'Guia completo sobre exercícios físicos em casa, modalidades e benefícios para a saúde.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Treinos em Casa',
    url: siteUrl,
    description: 'Guia completo sobre exercícios físicos em casa e modalidades para todos os níveis.'
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
          O <strong>Treinos em Casa</strong> nasceu com um propósito claro: mostrar que cuidar da saúde não depende de academia, equipamentos caros ou muito tempo livre.
        </p>
        <p>
          Nosso objetivo é informar e inspirar pessoas a praticarem exercícios físicos em casa, apresentando as principais modalidades, seus benefícios e quanto de energia cada uma pode gastar a cada minuto de prática.
        </p>
        <p>
          Sabemos que o sedentarismo é um dos maiores inimigos da saúde moderna. Movimentar-se regularmente melhora o coração, fortalece os músculos, reduz o estresse, ajuda no sono e aumenta a disposição para o dia a dia.
        </p>
        <p>
          Aqui você encontra informações sobre zumba, aeróbica, musculação, pilates, yoga, HIIT e muitas outras formas de se exercitar sem sair de casa.
        </p>
        <CheckoutButton>Quero resultados mais rápidos</CheckoutButton>
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
