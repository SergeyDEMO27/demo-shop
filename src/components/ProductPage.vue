<template>
  <div class="product-page">
    <MainHeader @openLogin="isLoginForm = true" />
    <div class="product-page__main">
      <div class="product-page__container">
        <MainLoader
          v-if="isLoad"
          :viewBox="'0 0 400 180'"
          :rectWidth="'100%'"
          :rectHeight="'170px'"
        />
        <div v-else>
          <router-link class="product-page__category" :to="`/products/${product.category}`">
            {{ product.category }}
          </router-link>
          <section class="product-page__info">
            <div class="product-page__wrapper">
              <ProductSlider
                class="product-page__item"
                :product="product"
                :activeColor="activeColor"
              />
              <ProductInfo
                class="product-page__item"
                :product="product"
                :colors="colors"
                :activeColor="activeColor"
                @changeColor="changeColorHandler"
              />
            </div>
          </section>
        </div>
      </div>
      <section class="product-page__sign">
        <div class="product-page__sign-wrapper">
          <MainSign @showModal="isModalShown = true" />
        </div>
      </section>
    </div>
    <MainFooter />
    <Transition name="slide-fade">
      <MainModal
        class="product-page__modal"
        v-if="isModalShown"
        @click="isModalShown = false"
        @keypress.enter="isModalShown = false"
      >
        <FeedbackModal @click.stop />
        <ButtonClose class="product-page__close-modal" />
      </MainModal>
    </Transition>
    <Transition name="slide-fade">
      <MainModal
        v-show="isLoginForm"
        @click="isLoginForm = false"
        @keypress.enter="isLoginForm = false"
      >
        <MainLogin @click.stop @closeForm="isLoginForm = false" />
        <ButtonClose class="main-page__close" />
      </MainModal>
    </Transition>
  </div>
</template>

<script>
import axios from 'axios';
import MainLoader from '@/components/MainLoader.vue';
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';
import ProductSlider from '@/components/ProductSlider.vue';
import ProductInfo from '@/components/ProductInfo.vue';
import MainSign from '@/components/MainSign.vue';
import MainModal from '@/components/MainModal.vue';
import ButtonClose from '@/components/ButtonClose.vue';
import FeedbackModal from '@/components/FeedbackModal.vue';
import MainLogin from '@/components/MainLogin.vue';

export default {
  components: {
    MainHeader,
    MainFooter,
    ProductSlider,
    ProductInfo,
    MainSign,
    MainModal,
    FeedbackModal,
    ButtonClose,
    MainLogin,
    MainLoader,
  },
  data() {
    return {
      isLoad: false,
      isLoginForm: false,
      isModalShown: false,
      product: {},
      colors: ['white', 'black', 'orange', 'brown', 'blue', 'red', 'green'],
      activeColor: 'white',
    };
  },
  methods: {
    async fetchProduct() {
      try {
        this.isLoad = true;
        const response = await axios(`https://fakestoreapi.com/products/${this.$route.params.id}`);
        this.product = response.data;
        this.isLoad = false;
      } catch (error) {
        console.log(error);
      }
    },
    changeColorHandler(color) {
      this.activeColor = color;
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
  @include default-container;
  padding-top: 130px;
}

.product-page__category {
  @include main-description;
  position: relative;
  display: inline-block;
  margin-bottom: 50px;
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

.product-page__modal {
  .main-modal__container {
    width: 96%;
  }
}

.product-page__close-modal {
  position: absolute;
  top: 10px;
  right: 40px;
}

.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  // .product-page__category {
  //   margin-bottom: 40px;
  // }

  .product-page__container {
    padding-right: 10px;
    padding-bottom: 60px;
    padding-left: 10px;
    text-align: center;
  }

  .product-page__wrapper {
    flex-direction: column;
    align-items: center;

    .product-page__item {
      width: 90%;
      margin-bottom: 25px;
    }
  }

  .product-page__modal {
    max-height: unset;
    // max-height: 30vh;

    .feedback-modal {
      // height: 550px;
    }
  }
}
</style>
