<script setup lang="ts">
import { treinos } from '~/data/treinos'

useHead({ title: 'Início' })
</script>

<template>
  <section class="hero">
    <h1>Treinos em Casa</h1>
    <p class="subtitle">
      Sem academia, sem equipamento e sem desculpas. Escolha um treino e comece hoje mesmo.
    </p>
    <NuxtLink to="/treinos" class="btn">Ver treinos</NuxtLink>
  </section>

  <section class="destaques">
    <h2>Destaques</h2>
    <div class="grid">
      <div v-for="treino in treinos.slice(0, 3)" :key="treino.slug" class="card">
        <h3>{{ treino.titulo }}</h3>
        <p class="meta">
          <span>{{ treino.nivel }}</span>
          <span>{{ treino.duracao }}</span>
        </p>
        <p>{{ treino.descricao }}</p>
        <NuxtLink :to="`/treinos/${treino.slug}`" class="btn">Ver treino</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 3rem 0;
}

.hero h1 {
  font-size: 2.5rem;
  color: var(--color-accent);
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.25rem;
  color: var(--color-muted);
  margin-bottom: 2rem;
}

.destaques h2 {
  margin-bottom: 1rem;
}

.meta {
  display: flex;
  gap: 1rem;
  color: var(--color-muted);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}
</style>
