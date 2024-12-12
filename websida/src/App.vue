<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TheFooter from './components/TheFooter.vue';

</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Hem</RouterLink>
      <RouterLink to="/about">Om oss</RouterLink>
      <RouterLink to="/projects">Våra projekt</RouterLink>
      <RouterLink to="/contact">Kontakta oss</RouterLink>
    </nav>
  </header>
  <RouterView />

  <TheFooter />
</template>

<style scoped>
  .logo {
    display: block;
    margin: 0 auto;
  }

  .wrapper {
    text-align: center;
  }

  nav {
    margin-top: 20px;
  }

  nav a {
    margin: 0 15px;
    text-decoration: none;
    color: #42b983;
  }
</style>
