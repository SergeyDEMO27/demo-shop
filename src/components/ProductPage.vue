<template>
  <div class="product-page">
    <MainHeader />
    <div class="product-page__main">
      <div class="product-page__container">
        <router-link class="product-page__category" :to="`/products/${product.category}`">
          {{ product.category }}
        </router-link>
        <section class="product-page__info">
          <div class="product-page__wrapper">
            <ProductSlider class="product-page__item" :product="product" />
            <ProductInfo class="product-page__item" :product="product" />
          </div>
        </section>
      </div>
      <section class="product-page__sign">
        <div class="product-page__sign-wrapper">
          <MainSign @showModal="isModalShown = true" />
        </div>
      </section>
    </div>
    <MainFooter />
    <MainModal v-show="isModalShown" @hideModal="isModalShown = false"><FeedbackModal /></MainModal>
  </div>
</template>

<script>
import axios from 'axios';
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';
import ProductInfo from '@/components/ProductInfo.vue';
import ProductSlider from '@/components/ProductSlider.vue';
import MainSign from '@/components/MainSign.vue';
import MainModal from '@/components/MainModal.vue';
import FeedbackModal from './FeedbackModal.vue';

export default {
  components: {
    MainHeader,
    MainFooter,
    ProductInfo,
    ProductSlider,
    MainSign,
    MainModal,
    FeedbackModal,
  },
  data() {
    return {
      isModalShown: false,
      product: {},
    };
  },
  methods: {
    async fetchProduct() {
      try {
        const response = await axios(`https://fakestoreapi.com/products/${this.$route.params.id}`);
        this.product = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.fetchProduct();
  },
};
</script>

<style lang="scss">
.product-page__main {
  width: 100%;
  // padding-top: 100px;
  // background-color: $color-gray;
}

.product-page__container {
  @include main-container;
  padding-top: 80px;
}

.product-page__category {
  @include main-description;
  position: relative;
  display: inline-block;
  margin-bottom: 30px;
  color: $color-default-black;
  text-decoration: none;
  text-transform: capitalize;

  &::after {
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    content: '';
    background-color: $color-orange;
    border-radius: 25px;
    transition: 0.4s;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
}

.product-page__info {
  // max-width: 1200px;
  // min-height: 200px;
  // padding-top: 60px;
  // padding-bottom: 60px;
  // margin-right: auto;
  // margin-left: auto;
  margin-bottom: 30px;
}

.product-page__wrapper {
  display: flex;
  justify-content: space-between;

  .product-page__item {
    width: 48%;
  }
}

.product-page__sign {
  width: 100%;
  min-height: 400px;
  padding: 60px 0;
  background-color: $color-yellow;

  .product-page__sign-wrapper {
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
  }
}
</style>
