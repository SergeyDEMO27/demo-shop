<template>
  <div class="main-bin">
    <div class="main-bin__wrapper">
      <h2 class="main-bin__title">Main Products({{ productCount }})</h2>
      <button class="main-bin__removeAll" type="button" @click="removeAllProductsInBin">
        clear list
      </button>
    </div>
    <div class="main-bin__container">
      <ul class="main-bin__list">
        <li class="main-bin__item" v-for="product in productsInBin" :key="product">
          <div class="main-bin__item-picture">
            <img class="main-bin__item-image" :src="product.imagePath" alt="" />
          </div>
          <router-link class="main-bin__item-link" :to="`/product/${product.id}`">
            <p class="main-bin__item-description">{{ product.title }} / {{ product.color }}</p>
          </router-link>
          <p class="main-bin__item-price">${{ product.price }}</p>
          <ButtonClose class="main-bin__item-remove" @click="removeProductInBin(product.id)" />
        </li>
      </ul>
    </div>
    <p class="main-bin__item-total">
      <span>Total Price:</span> <span>${{ totalPrice }}</span>
    </p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ButtonClose from '@/components/ButtonClose.vue';

export default {
  components: {
    ButtonClose,
  },
  data() {
    return {
      totalPrice: 0,
      productCount: 0,
    };
  },
  methods: {
    ...mapActions({
      removeProductInBin: 'productsBin/removeProductInBin',
      removeAllProductsInBin: 'productsBin/removeAllProductsInBin',
    }),
  },
  computed: {
    ...mapState({
      productsInBin: (state) => state.productsBin.productsInBin,
    }),
  },
  watch: {
    productsInBin: {
      handler(newValue) {
        if (newValue.length === 0) {
          this.totalPrice = 0;
        } else {
          // eslint-disable-next-line no-return-assign
          newValue.map(({ price }) => (this.totalPrice += price));
        }
        this.productCount = this.productsInBin.length;
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss">
.main-bin {
  width: 400px;
  height: 300px;
  padding: 20px;
  padding-right: 0;
  border-radius: 15px;
  background-color: $color-default-white;
  box-shadow: 0 0 12px rgba(0, 0, 0, 16%);
}

.main-bin__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-right: 30px;
}

.main-bin__title {
  @include main-title;
  margin-bottom: 5px;
  font-size: 16px;
}

.main-bin__removeAll {
  @include main-title;
  font-size: 16px;
  text-transform: lowercase;
  opacity: 70%;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: $color-orange;
  }
}

.main-bin__container {
  width: 100%;
  height: 210px;
  overflow-y: scroll;
}

.main-bin__list {
  @include reset-list;
}

.main-bin__item {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-right: 25px;
}

.main-bin__item-picture {
  width: 40px;
  height: 40px;

  .main-bin__item-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.main-bin__item-link {
  max-width: 60%;
  color: $color-default-black;
  text-decoration: none;
  transition: 0.4s;

  &:hover {
    color: $color-orange;
  }
}

.main-bin__item-description {
  @include main-description;
  font-size: 14px;
}

.main-bin__item-price {
  @include main-description;
  max-width: 15%;
  font-size: 14px;
}

.main-bin__item-total {
  @include main-title;
  margin-top: 5px;
  font-size: 16px;
}

.main-bin__item-remove {
  position: absolute;
  top: 45%;
  right: 3px;
  width: 15px;
  height: 15px;
  transform: translateY(-45%);
}
</style>
