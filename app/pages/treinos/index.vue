<script setup lang="ts">
import { treinos } from '~/data/treinos'

useHead({ title: 'Treinos' })
</script>

<template>
  <section>
    <h1>Todos os treinos</h1>
    <p class="intro">Escolha o treino ideal para o seu nível e objetivo.</p>
    <div class="grid">
      <article v-for="treino in treinos" :key="treino.slug" class="card">
        <h2>{{ treino.titulo }}</h2>
        <p class="meta">
          <span class="nivel">{{ treino.nivel }}</span>
          <span>{{ treino.duracao }}</span>
        </p>
        <p>{{ treino.descricao }}</p>
        <NuxtLink :to="`/treinos/${treino.slug}`" class="btn">Ver treino</NuxtLink>
      </article>
    </div>
  </section>
</template>

<style scoped>
.intro {
  color: var(--color-muted);
  margin-bottom: 1.5rem;
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
}
</style>
