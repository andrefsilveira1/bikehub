<script setup>
import { RouterLink } from "vue-router";
</script>
<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
}

.navbar__links {
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  color: rgba(9, 12, 8, 0.6);
}

.navbar__links a.router-link-exact-active {
  color: #ff1654;
  font-weight: 600;
}

.navbar__links > * + * {
  margin-left: 2.3rem;
}

.circle {
  width: 6px;
  height: 6px;
  background: rgba(9, 12, 8, 0.6);
  border-radius: 50%;
}
</style>
<template>
  <header class="navbar">
    <img src="/logo.svg" alt="bikehub logo" />
    <ul class="navbar__links">
      <RouterLink to="/map">Mapa</RouterLink>
      <div class="circle" />
      <RouterLink to="/subscriptions">Seus alguéis</RouterLink>
    </ul>
  </header>
</template>
