import Home from '@/pages/Home.vue'
import Recipe from '@/pages/Recipe.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{path: "/", component: Home }, {path: "/recipes/:id", component: Recipe, props: true}],
})

export default router
