import { createStore } from 'vuex';
import productsBinModule from '@/store/productsBinModule';

export default createStore({
  modules: {
    productsBin: productsBinModule,
  },
});
