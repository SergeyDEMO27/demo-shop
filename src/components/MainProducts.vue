<template>
  <section class="main-products">
    <div class="main-products__container">
      <h2 class="main-products__title">{{ title }}</h2>
      <MainLoader
        v-if="isProductsLoading"
        :viewBox="'0 0 400 110'"
        :rectWidth="'100%'"
        :rectHeight="'100px'"
      />
      <div class="main-products__preview">
        <PreviewItem v-if="products.length" :preview="products[0]" :horisonal="true" />
      </div>
      <div class="main-products__text">
        <p class="main-products__description">
          {{ description }}
        </p>
      </div>
      <div class="main-products__wrapper">
        <div class="main-products__wrapper-item">
          <MainLoader
            v-if="isProductsLoading"
            :viewBox="'0 0 97 100'"
            :rectWidth="'100%'"
            :rectHeight="'100px'"
          />
          <PreviewItem v-if="products.length > 1" :preview="products[1]" />
        </div>
        <div class="main-products__wrapper-item">
          <MainLoader
            v-if="isProductsLoading"
            :viewBox="'0 0 97 100'"
            :rectWidth="'100%'"
            :rectHeight="'100px'"
          />
          <PreviewItem v-if="products.length > 2" :preview="products[2]" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import useProducts from '@/hooks/useProducts';
import MainLoader from '@/components/UI/MainLoader.vue';
import PreviewItem from '@/components/PreviewItem.vue';

export default {
  name: 'MainProducts',
  props: {
    title: String,
    description: String,
    categories: Array,
    productsLimit: Number,
  },
  components: {
    PreviewItem,
    MainLoader,
  },
  setup(props) {
    // prettier-ignore
    const { products, isProductsLoading, isError } = useProducts(
      props.categories,
      props.productsLimit,
    );

    return {
      products,
      isProductsLoading,
      isError,
    };
  },
  watch: {
    isError() {
      this.$emit('fetchError');
    },
  },
};
</script>

<style lang="scss">
.main-products {
  min-height: 700px;
  background-color: rgb(245, 244, 243);
}

.main-products__container {
  @include default-container;
}

.main-products__title {
  @include main-title;
  margin-bottom: 80px;
}

.main-products__wrapper {
  display: flex;
  justify-content: space-between;

  .main-products__wrapper-item {
    width: 48%;
  }
}

.main-products__text {
  width: 100%;
  margin: 60px 0;
  text-align: center;
}

.main-products__description {
  @include main-description;
  display: inline-block;
  max-width: 50%;
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .main-products__container {
    padding: 80px 10px;
  }

  .main-products__title {
    margin-bottom: 80px;
    font-size: 30px;
    text-align: center;
  }

  .main-products__wrapper {
    flex-direction: column;

    .main-products__wrapper-item {
      width: 100%;
      margin-bottom: 60px;
    }
  }

  .main-products__description {
    max-width: 100%;
    font-size: 18px;
  }
}
</style>
