import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/components/pages/MainPage.vue';
import FilterPage from '@/components/pages/FilterPage.vue';
import ProductPage from '@/components/pages/ProductPage.vue';

const scrollBehavior = () => window.scrollTo(0, 0);

const routes = [
  {
    path: '/:catchAll(.*)',
    component: MainPage,
  },
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/products/:id',
    component: FilterPage,
  },
  {
    path: '/product/:id',
    component: ProductPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior,
});

export default router;
