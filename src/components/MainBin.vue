<template>
  <div class="main-bin">
    <div class="main-bin__main">
      <div class="main-bin__wrapper">
        <h2 class="main-bin__title">Main Products ({{ productCount }})</h2>
        <button class="main-bin__removeAll" type="button" @click="removeAllProductsInBin">
          clear list
        </button>
      </div>
      <div v-if="productCount" class="main-bin__container">
        <TransitionGroup class="main-bin__list" name="list" tag="ul">
          <li class="main-bin__item" v-for="product in productsInBin" :key="product">
            <div class="main-bin__counter">
              {{ product.count }}
              <div>
                <button class="main-bin__increase" @click="increaseProductCount(product.idUnique)">
                  <span class="main-bin__label">increase</span></button
                ><button
                  class="main-bin__decrease"
                  @click="
                    if (product.count > 1) {
                      decreaseProductCount(product.idUnique);
                    }
                  "
                >
                  <span class="main-bin__label">decrease</span>
                </button>
              </div>
            </div>
            <div class="main-bin__item-picture">
              <img class="main-bin__item-image" :src="product.imagePath" alt="" />
            </div>
            <router-link class="main-bin__item-link" :to="`/product/${product.id}`">
              <p class="main-bin__item-description">{{ product.title }} / {{ product.color }}</p>
            </router-link>
            <p class="main-bin__item-price">${{ product.price }}</p>
            <ButtonClose
              class="main-bin__item-remove"
              @click="removeProductInBin(product.idUnique)"
            />
          </li>
        </TransitionGroup>
      </div>
      <div v-else class="main-bin__container">
        <p class="main-bin__empty">Your basket is empty</p>
      </div>
      <div class="main-bin__info">
        <p class="main-bin__item-total">
          <span>Total Price:</span> <span>${{ totalPrice }}</span>
        </p>
        <a class="main-bin__item-checkout" href="#" @click.prevent="">checkout</a>
      </div>
    </div>
    <div v-if="productCount" class="main-bin__count">
      <span>{{ productCount }}</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ButtonClose from '@/components/UI/ButtonClose.vue';

export default {
  name: 'MainBin',
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
      setProductsOnMount: 'productsBin/setProductsOnMount',
      increaseProductCount: 'productsBin/increaseProductCount',
      decreaseProductCount: 'productsBin/decreaseProductCount',
      removeProductInBin: 'productsBin/removeProductInBin',
      removeAllProductsInBin: 'productsBin/removeAllProductsInBin',
    }),
  },
  computed: {
    ...mapState({
      productsInBin: (state) => state.productsBin.productsInBin,
    }),
  },
  mounted() {
    this.setProductsOnMount();
  },
  watch: {
    productsInBin: {
      handler(newValue) {
        localStorage.setItem('productsInBin', JSON.stringify(newValue));
        this.productCount = 0;
        this.totalPrice = 0;
        if (newValue.length !== 0) {
          // eslint-disable-next-line array-callback-return
          newValue.map(({ count, price }) => {
            this.productCount += count;
            this.totalPrice += price * count;
          });
        }
        this.totalPrice = Math.floor(this.totalPrice);
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss">
.main-bin__main {
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

.main-bin__removeAll,
.main-bin__item-checkout {
  @include main-title;
  @include default-transition;
  font-size: 16px;
  text-transform: lowercase;
  color: $color-default-black;
  opacity: 70%;
  background-color: transparent;
  border: none;
  text-decoration: none;
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

  &::after {
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 98%;
    height: 1px;
    content: '';
    background-color: $color-default-black;
  }
}

.main-bin__counter {
  position: relative;

  .main-bin__increase,
  .main-bin__decrease {
    position: absolute;
    top: 0;
    left: 0;
    width: 11px;
    height: 11px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      &::before,
      &::after {
        background-color: $color-default-black;
      }
    }
  }

  .main-bin__increase {
    top: -15px;

    &::before {
      @include center-element;
      @include default-transition;
      content: '';
      width: 2px;
      height: 90%;
      background-color: rgba(0, 0, 0, 0.5);
    }

    &::after {
      @include center-element;
      @include default-transition;
      content: '';
      width: 90%;
      height: 2px;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  .main-bin__decrease {
    top: 18px;

    &::after {
      @include center-element;
      @include default-transition;
      content: '';
      width: 100%;
      height: 2px;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}

.main-bin__label {
  @include visually-hidden;
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
  @include default-transition;
  max-width: 60%;
  color: $color-default-black;
  text-decoration: none;

  &:hover {
    color: $color-orange;
  }
}

.main-bin__item-description,
.main-bin__counter {
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

.main-bin__info {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-right: 30px;
}

.main-bin__empty {
  @include center-element;
  @include main-title;
  font-size: 19px;
}

.main-bin__count {
  position: absolute;
  top: -2px;
  right: -19px;
  padding: 13px;
  opacity: 95%;
  background-color: $color-orange;
  border-radius: 50%;
  cursor: default;

  span {
    @include center-element;
    @include main-description;
    font-size: 12px;
  }
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.list-leave-active {
  position: absolute;
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .main-bin__main {
    max-width: 400px;
    width: 88vw;
  }

  .main-bin__item-description {
    font-size: 12px;
  }

  .main-bin__count {
    right: -10px;
    padding: 10px;

    span {
      font-size: 10px;
    }
  }
}
</style>
