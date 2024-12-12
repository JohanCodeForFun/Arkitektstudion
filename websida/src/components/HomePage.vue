<template>
  <div class="hero">
    <h1>Vi skapar framtidens byggnader med passion och precision.</h1>
  </div>
  <nav>
    <RouterLink to="/about">Om oss</RouterLink>
    <RouterLink to="/projects">Våra projekt</RouterLink>
    <RouterLink to="/contact">Kontakta oss</RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.hero {
  background-image: url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1vZGVybiUyMG9mZmljZXxlbnwwfHx8fDE2MzY2NzY2MjI&ixlib=rb-1.2.1&q=80&w=1080');
  background-size: cover;
  color: white;
  background-position: center;
  text-align: center;
  padding: 100px 20px;
}

nav {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
}
</style>