<template>
  <div class="site">
    <a href="#main" class="skip-link">Pular para o conteúdo</a>
    <header class="header">
      <nav class="nav" aria-label="Navegação principal">
        <NuxtLink to="/" class="logo" aria-label="Treinos em Casa - Início">
          <span class="logo-icon">💪</span>
          <span>Treinos em Casa</span>
        </NuxtLink>
        <button
          class="menu-toggle"
          :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'"
          :aria-expanded="menuOpen"
          aria-controls="menu-links"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div id="menu-links" class="links" :class="{ open: menuOpen }" role="menubar">
          <NuxtLink to="/" role="menuitem" @click="menuOpen = false">Início</NuxtLink>
          <NuxtLink to="/modalidades" role="menuitem" @click="menuOpen = false">Modalidades</NuxtLink>
          <NuxtLink to="/sobre" role="menuitem" @click="menuOpen = false">Sobre</NuxtLink>
          <CheckoutButton class="header-btn">Comprar agora</CheckoutButton>
        </div>
      </nav>
    </header>
    <main id="main" class="main" tabindex="-1">
      <NuxtPage />
    </main>
    <footer class="footer">
      <div class="footer-content">
        <p class="footer-brand">Treinos em Casa</p>
        <p class="footer-copy">© 2026 Treinos em Casa. Fique em forma sem sair de casa.</p>
        <nav class="footer-links" aria-label="Links do rodapé">
          <NuxtLink to="/">Início</NuxtLink>
          <NuxtLink to="/modalidades">Modalidades</NuxtLink>
          <NuxtLink to="/sobre">Sobre</NuxtLink>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<style>
:root {
  --color-bg: #0a0a0f;
  --color-surface: #14141f;
  --color-surface-2: #1e1e2d;
  --color-text: #f8fafc;
  --color-muted: #94a3b8;
  --color-accent: #22c55e;
  --color-accent-hover: #16a34a;
  --color-accent-glow: rgba(34, 197, 94, 0.25);
  --radius: 1rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

.skip-link {
  position: absolute;
  top: -40px;
  left: 1rem;
  background: var(--color-accent);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  z-index: 100;
  transition: top 0.2s;
  text-decoration: none;
}

.skip-link:focus {
  top: 1rem;
}

body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

.site {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding: 1rem 1.5rem;
  position: sticky;
  top: 0;
  z-index: 50;
}

.nav {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: 800;
  color: var(--color-text);
  text-decoration: none;
  font-size: 1.35rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  font-size: 1.5rem;
}

.logo span:last-child {
  background: linear-gradient(135deg, #22c55e, #4ade80);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
  padding: 0.5rem;
}

.menu-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
}

.links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.links a {
  color: var(--color-muted);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.links a:hover,
.links a.router-link-active {
  color: var(--color-accent);
}

.header-btn {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.main {
  flex: 1;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.footer {
  background: var(--color-surface);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 2.5rem 1.5rem;
  margin-top: 2rem;
}

.footer-content {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.footer-brand {
  font-weight: 800;
  font-size: 1.25rem;
  margin: 0;
  background: linear-gradient(135deg, #22c55e, #4ade80);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-copy {
  color: var(--color-muted);
  font-size: 0.875rem;
  margin: 0;
  text-align: center;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-links a {
  color: var(--color-muted);
  text-decoration: none;
  font-size: 0.875rem;
}

.footer-links a:hover {
  color: var(--color-accent);
}

h1, h2, h3 {
  margin-top: 0;
  line-height: 1.2;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color-accent);
  color: #fff;
  padding: 0.85rem 1.5rem;
  border-radius: var(--radius);
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s, transform 0.15s;
}

.btn:hover {
  background: var(--color-accent-hover);
  transform: translateY(-2px);
}

.card {
  background: var(--color-surface);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius);
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--color-surface);
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    display: none;
  }

  .links.open {
    display: flex;
  }

  .links a,
  .links .header-btn {
    margin: 0.5rem 0;
  }
}
</style>
