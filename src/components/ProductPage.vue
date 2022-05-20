<template>
  <div class="product-page">
    <MainHeader />
    <div class="product-page__main">
      <section class="product-page__info">
        <div class="product-page__wrapper">
          <ProductSlider class="product-page__item" />
          <ProductInfo class="product-page__item" />
        </div>
      </section>
      <section class="product-page__sign">
        <div class="product-page__sign-wrapper">
          <MainSign />
        </div>
      </section>
    </div>
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';
import ProductInfo from '@/components/ProductInfo.vue';
import ProductSlider from '@/components/ProductSlider.vue';
import MainSign from '@/components/MainSign.vue';

export default {
  components: {
    MainHeader,
    MainFooter,
    ProductInfo,
    ProductSlider,
    MainSign,
  },
};
</script>

<style lang="scss">
.product-page__main {
  width: 100%;
  padding-top: 100px;
  background-color: $color-gray;
}

.product-page__info {
  max-width: 1200px;
  min-height: 200px;
  padding-top: 60px;
  padding-bottom: 60px;
  margin-right: auto;
  margin-left: auto;
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
