// eslint-disable-next-line import/prefer-default-export
export const productsBinModule = {
  state: () => ({
    productsInBin: [],
  }),
  getters: {},
  mutations: {
    setProductsInBin(state, product) {
      state.productsInBin = [...state.productsInBin, product];
    },
    setProductsOnMount(state) {
      if (localStorage.getItem('productsInBin')) {
        state.productsInBin = JSON.parse(localStorage.getItem('productsInBin'));
      }
    },
    removeProductInBin(state, id) {
      state.productsInBin = state.productsInBin.filter((product) => product.idUnique !== id);
    },
    removeProductsInBin(state) {
      state.productsInBin = [];
    },
  },
  actions: {
    addProductInBin({ commit }, product) {
      commit('setProductsInBin', product);
    },
    removeProductInBin({ commit }, id) {
      commit('removeProductInBin', id);
    },
    removeAllProductsInBin({ commit }) {
      commit('removeProductsInBin');
    },
    setProductsOnMount({ commit }) {
      commit('setProductsOnMount');
    },
  },
  namespaced: true,
};
