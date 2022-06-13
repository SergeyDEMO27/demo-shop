<template>
  <div class="product-info">
    <h2 class="product-info__title">{{ product.title }}</h2>
    <p class="product-info__description">
      {{ product.description }}
    </p>
    <ul class="product-info__color">
      <li
        class="product-info__color-item"
        :class="{ 'product-info__color-item-active': activeColor === color }"
        @click="$emit('changeColor', color)"
        @keypress.enter="$emit('changeColor', color)"
        v-for="color in colors"
        :key="color"
      >
        <div :style="{ backgroundColor: color }"></div>
      </li>
    </ul>
    <p class="product-info__price">${{ product.price }}</p>
    <MainButton
      @click.prevent="
        addProductInBin({
          id: product.id,
          idUnique: `${product.title}${activeColor}`,
          imagePath: product.image,
          title: product.title,
          color: activeColor,
          price: product.price,
          count: 1,
        })
      "
      class="product-info__button"
      :buttonType="'button'"
      >Add to basket</MainButton
    >
    <ul class="product-info__special">
      <li class="product-info__special-item">Free express delivery</li>
      <li class="product-info__special-item">30-day free trial</li>
      <li class="product-info__special-item">Up to 3 years warranty</li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import MainButton from '@/components/UI/MainButton.vue';

export default {
  name: 'ProductInfo',
  props: {
    product: Object,
    colors: Array,
    activeColor: String,
  },
  components: {
    MainButton,
  },
  methods: {
    ...mapMutations({
      addProductInBin: 'productsBin/setProductsInBin',
    }),
  },
};
</script>

<style lang="scss">
.product-info__title {
  @include main-title;
  margin-bottom: 30px;
  font-size: 30px;
  text-transform: lowercase;

  &::first-letter {
    text-transform: uppercase;
  }
}

.product-info__description {
  @include main-description;
  margin-bottom: 30px;
  font-size: 18px;
}

.product-info__color {
  @include reset-list;
  display: flex;
  margin-bottom: 30px;

  .product-info__color-item {
    position: relative;
    width: 26px;
    height: 26px;
    margin-right: 8px;
    background-color: $color-default-white;
    border: 1px solid rgba(0, 0, 0, 40%);
    border-radius: 50%;
    cursor: pointer;

    div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 17px;
      height: 17px;
      border: 1px solid rgba(0, 0, 0, 40%);
      border-radius: 50%;
      transition: 0.1s;
    }

    &:hover {
      div {
        width: 100%;
        height: 100%;
        border: none;
      }
    }

    &-active {
      border-color: $color-default-black;
      cursor: auto;

      div {
        width: 21px;
        height: 21px;
      }

      &:hover {
        div {
          width: 21px;
          height: 21px;
          border: 1px solid rgba(0, 0, 0, 40%);
        }
      }
    }
  }
}

.product-info__price {
  @include main-title;
  margin-bottom: 30px;
  text-transform: capitalize;
  font-size: 20px;
}

.product-info__button {
  margin-bottom: 30px;
}

.product-info__special {
  @include reset-list;
  @include main-description;
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;

  .product-info__special-item {
    margin-bottom: 10px;
    margin-left: 30px;
    position: relative;
    text-align: center;

    &::before {
      position: absolute;
      top: -2px;
      left: -18px;
      content: '\2714';
    }
  }
}

@media (min-width: $viewport--md) and (max-width: $viewport--lg) {
  .product-info__special {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .product-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .product-info__color {
    margin-bottom: 20px;
    order: -1;
  }

  .product-info__title {
    font-size: 28px;
  }

  .product-info__description {
    font-size: 16px;
  }

  .product-info__special {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
