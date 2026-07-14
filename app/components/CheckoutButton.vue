<template>
  <a
    :href="checkoutUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="checkout-btn"
  >
    <slot>Quero resultados mais rápidos</slot>
  </a>
</template>

<script setup lang="ts">
const checkoutUrl = 'https://pay.kirvano.com/ac5a3b59-d2ce-493d-8eb3-a2dc7c6f5f56?aff=f2eb3edb-c9be-4804-876b-71eb605f6f98'
</script>

<style scoped>
.checkout-btn {
  display: inline-block;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: #fff;
  padding: 0.875rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 700;
  text-align: center;
  box-shadow: 0 4px 14px rgba(34, 197, 94, 0.3);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.checkout-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(34, 197, 94, 0.4);
}
</style>
