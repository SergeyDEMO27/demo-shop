import MainPage from '@/components/MainPage.vue';
import FilterPage from '@/components/FilterPage.vue';
import ProductPage from '@/components/ProductPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/jewelry',
    component: FilterPage,
  },
  {
    path: '/product',
    component: ProductPage,
  },
];

const router = createRouter({ routes, history: createWebHistory(process.env.BASE_URL) });

export default router;
