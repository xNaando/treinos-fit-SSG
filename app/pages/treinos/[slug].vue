<script setup lang="ts">
import { treinos } from '~/data/treinos'

const route = useRoute()
const treino = treinos.find(t => t.slug === route.params.slug)

if (!treino) {
  throw createError({ statusCode: 404, statusMessage: 'Treino não encontrado' })
}

useSeo({
  title: `${treino.titulo} - Treino em Casa`,
  description: treino.descricao,
  path: `/treinos/${treino.slug}`
})
</script>

<template>
  <section>
    <NuxtLink to="/treinos" class="back">← Voltar para treinos</NuxtLink>
    <h1>{{ treino.titulo }}</h1>
    <p class="meta">
      <span class="nivel">{{ treino.nivel }}</span>
      <span>{{ treino.duracao }}</span>
    </p>
    <p class="descricao">{{ treino.descricao }}</p>

    <div class="cta">
      <p>Quer um plano completo com esse e muitos outros treinos?</p>
      <CheckoutButton />
    </div>

    <h2>Exercícios</h2>
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
.back {
  color: var(--color-muted);
  text-decoration: none;
  display: inline-block;
  margin-bottom: 1rem;
}

.back:hover {
  color: var(--color-accent);
}

.meta {
  display: flex;
  gap: 1rem;
  align-items: center;
  color: var(--color-muted);
  font-size: 0.875rem;
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
  margin-bottom: 2rem;
}

.cta {
  margin-bottom: 2rem;
  padding: 1.25rem;
  background: var(--color-surface);
  border: 1px solid #334155;
  border-radius: 0.75rem;
}

.cta p {
  margin: 0 0 1rem;
  color: var(--color-muted);
}

.exercicios {
  list-style: none;
  padding: 0;
}

.detalhes {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  color: var(--color-muted);
  font-size: 0.875rem;
}
</style>
