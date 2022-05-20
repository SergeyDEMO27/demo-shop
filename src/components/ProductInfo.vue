<template>
  <div class="product-info">
    <h2 class="product-info__header">Ultimate over-ear headphones</h2>
    <p class="product-info__description">
      Moving, masterful, mesmerising. Get lost in your music with adjustable noise-cancelling
      headphones that redefine grab-and-go listening.
    </p>
    <ul class="product-info__color">
      <li class="product-info__color-item" v-for="color in colors" :key="color">
        <button :style="{ backgroundColor: color }" type="button"></button>
      </li>
    </ul>
    <p class="product-info__price">$899</p>
    <MainButton class="product-info__button">Add to basket</MainButton>
    <ul class="product-info__special">
      <li class="product-info__special-item">Free express delivery</li>
      <li class="product-info__special-item">30-day free trial</li>
      <li class="product-info__special-item">Up to 3 years warranty</li>
    </ul>
  </div>
</template>

<script>
import MainButton from '@/components/MainButton.vue';

export default {
  components: {
    MainButton,
  },
  data() {
    return {
      colors: ['black', 'orange', 'brown', 'blue', 'gray', 'white'],
    };
  },
};
</script>

<style lang="scss">
.product-info__header {
  @include main-title;
  margin-bottom: 30px;
  font-size: 32px;
}

.product-info__description {
  @include main-description;
  margin-bottom: 30px;
  font-size: 18px;
}

.product-info__color {
  @include reset-list;
  display: flex;
  // justify-content: space-between;
  margin-bottom: 15px;

  .product-info__color-item {
    margin-right: 10px;

    button {
      width: 20px;
      height: 20px;
      padding: 2px;
      border: 1px solid black;
      border-radius: 50%;
      cursor: pointer;
    }
  }
}

.product-info__price {
  margin-bottom: 15px;
  font-family: 'Lexend Deca', Arial, Helvetica, sans-serif;
  font-weight: normal;
  text-transform: capitalize;
  font-size: 20px;
}

.product-info__button {
  width: 290px;
  margin-bottom: 15px;
}

.product-info__special {
  @include reset-list;
  @include main-description;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  font-size: 16px;

  .product-info__special-item {
    width: 30%;
    text-align: center;
  }
}
</style>
