import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {path: '/', component: LogIn},
      {path: '/signin', component: SignIn},
  ],
});

export default router;