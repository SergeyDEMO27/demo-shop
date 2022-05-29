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
    removeProductInBin(state, id) {
      state.productsInBin = state.productsInBin.filter((product) => product.id !== id);
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
  },
  namespaced: true,
};
