import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
// import AboutPage from '@/components/AboutPage.vue' // Skapa denna komponent om den inte finns
// import ProjectsPage from '@/components/ProjectsPage.vue' // Skapa denna komponent om den inte finns
// import ContactPage from '@/components/ContactPage.vue' // Skapa denna komponent om den inte finns

const routes = [
  { path: '/', component: HomePage },
  // { path: '/about', component: AboutPage },
  // { path: '/projects', component: ProjectsPage },
  // { path: '/contact', component: ContactPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router