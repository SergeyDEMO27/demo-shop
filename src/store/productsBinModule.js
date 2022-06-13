export default {
  state: () => ({
    productsInBin: [],
  }),
  getters: {},
  mutations: {
    setProductsInBin(state, product) {
      // prettier-ignore
      const uniqueValues = [...state.productsInBin, product].filter(
        (value, index, self) => index === self.findIndex((t) => t.idUnique === value.idUnique),
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
          product.count += 1;
        }
        return product;
      });
    },
    decreaseProducts(state, id) {
      state.productsInBin = [...state.productsInBin].map((product) => {
        if (product.idUnique === id) {
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
  namespaced: true,
};
