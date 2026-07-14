<template>
  <div class="site">
    <header class="header">
      <nav class="nav">
        <NuxtLink to="/" class="logo">Treinos em Casa</NuxtLink>
        <div class="links">
          <NuxtLink to="/">Início</NuxtLink>
          <NuxtLink to="/treinos">Treinos</NuxtLink>
          <NuxtLink to="/sobre">Sobre</NuxtLink>
          <CheckoutButton class="header-btn">Comprar agora</CheckoutButton>
        </div>
      </nav>
    </header>
    <main class="main">
      <NuxtPage />
    </main>
    <footer class="footer">
      <p>© 2026 Treinos em Casa. Fique em forma sem sair de casa.</p>
    </footer>
  </div>
</template>

<style>
:root {
  --color-bg: #0f172a;
  --color-surface: #1e293b;
  --color-text: #f8fafc;
  --color-muted: #94a3b8;
  --color-accent: #22c55e;
  --color-accent-hover: #16a34a;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-text);
}

.site {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: var(--color-surface);
  border-bottom: 1px solid #334155;
  padding: 1rem 1.5rem;
}

.nav {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: 800;
  color: var(--color-accent);
  text-decoration: none;
  font-size: 1.25rem;
}

.links a {
  color: var(--color-text);
  text-decoration: none;
  margin-left: 1.5rem;
  font-weight: 500;
}

.links a:hover,
.links a.router-link-active {
  color: var(--color-accent);
}

.header-btn {
  margin-left: 1.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.main {
  flex: 1;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.footer {
  text-align: center;
  padding: 1.5rem;
  color: var(--color-muted);
  font-size: 0.875rem;
  border-top: 1px solid #334155;
}

h1 {
  margin-top: 0;
}

.btn {
  display: inline-block;
  background: var(--color-accent);
  color: #fff;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
}

.btn:hover {
  background: var(--color-accent-hover);
}

.card {
  background: var(--color-surface);
  border: 1px solid #334155;
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}
</style>
