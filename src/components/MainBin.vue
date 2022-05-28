<template>
  <div class="main-bin">
    <h2 class="main-bin__title">Main Products</h2>
    <ul class="main-bin__list">
      <li class="main-bin__item" v-for="product in productInBin" :key="product">
        <p class="main-bin__item-description">{{ product.title }} / {{ product.color }}</p>
        <p class="main-bin__item-price">${{ product.price }}</p>
      </li>
    </ul>
    <p>Total Price: ${{ totalPrice }}</p>
  </div>
</template>

<script>
export default {
  props: {
    productInBin: Array,
  },
  data() {
    return {
      totalPrice: 0,
    };
  },
  watch: {
    productInBin: {
      handler(newValue) {
        // eslint-disable-next-line no-return-assign
        newValue.map(({ price }) => (this.totalPrice += price));
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss">
.main-bin {
  width: 400px;
  max-height: 250px;
  min-height: 200px;
  padding: 20px;
  background-color: red;
  overflow-y: scroll;
}

.main-bin__list {
  @include reset-list;
}

.main-bin__item {
  display: flex;
  justify-content: space-between;
}

.main-bin__item-description {
  @include main-description;
  max-width: 50%;
  font-size: 14px;
}

.main-bin__item-price {
  @include main-description;
  max-width: 10%;
  font-size: 14px;
}
</style>
