// eslint-disable-next-line import/prefer-default-export
export const productsBinModule = {
  state: () => ({
    productsInBin: [],
  }),
  getters: {},
  mutations: {
    setProductsInBin(state, product) {
      const uniqueValues = [...state.productsInBin, product].filter(
        // eslint-disable-next-line comma-dangle
        (value, index, self) => index === self.findIndex((t) => t.idUnique === value.idUnique)
      );

      state.productsInBin = uniqueValues;
    },
    setProductsOnMount(state) {
      if (localStorage.getItem('productsInBin')) {
        state.productsInBin = JSON.parse(localStorage.getItem('productsInBin'));
      }
    },
    increaseProducts(state, id) {
      state.productsInBin = [...state.productsInBin].map((product) => {
        if (product.idUnique === id) {
          // eslint-disable-next-line no-param-reassign
          product.count += 1;
        }
        return product;
      });
    },
    decreaseProducts(state, id) {
      state.productsInBin = [...state.productsInBin].map((product) => {
        if (product.idUnique === id) {
          // eslint-disable-next-line no-param-reassign
          product.count -= 1;
        }
        return product;
      });
    },
    removeProductInBin(state, id) {
      state.productsInBin = state.productsInBin.filter((product) => product.idUnique !== id);
    },
    removeProductsInBin(state) {
      state.productsInBin = [];
    },
  },
  actions: {
    setProductsOnMount({ commit }) {
      commit('setProductsOnMount');
    },
    addProductInBin({ commit }, product) {
      commit('setProductsInBin', product);
    },
    increaseProductCount({ commit }, id) {
      commit('increaseProducts', id);
    },
    decreaseProductCount({ commit }, id) {
      commit('decreaseProducts', id);
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
