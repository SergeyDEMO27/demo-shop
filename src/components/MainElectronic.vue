<template>
  <section class="main-electronic">
    <div class="main-electronic__container">
      <h2 class="main-electronic__title">Best Electronics of Demo Shop</h2>
      <MainLoader
        v-if="isLoading"
        :viewBox="'0 0 400 110'"
        :rectWidth="'100%'"
        :rectHeight="'100px'"
      />
      <div class="main-electronic__preview">
        <PreviewItem
          v-if="previews.electronics"
          :preview="previews.electronics[0]"
          :horisonal="true"
        />
      </div>
      <div class="main-electronic__text">
        <p class="main-electronic__description">
          We're dedicated to providing the best prices, selection, and overall experience you'll
          find online. To put it simply, we've created a unique store that offers our customers the
          ability to find what they want easily and quickly. And, with our free shipping,
          hassle-free returns, lowest price, 30-day returns window and 3 years warranty we offer our
          customers a no-risk opportunity to try us out.
        </p>
      </div>
      <div class="main-electronic__wrapper">
        <div class="main-electronic__wrapper-item">
          <MainLoader
            v-if="isLoading"
            :viewBox="'0 0 97 100'"
            :rectWidth="'100%'"
            :rectHeight="'100px'"
          />
          <PreviewItem v-if="previews.electronics" :preview="previews.electronics[1]" />
        </div>
        <div class="main-electronic__wrapper-item">
          <MainLoader
            v-if="isLoading"
            :viewBox="'0 0 97 100'"
            :rectWidth="'100%'"
            :rectHeight="'100px'"
          />
          <PreviewItem v-if="previews.electronics" :preview="previews.electronics[2]" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import MainLoader from '@/components/UI/MainLoader.vue';
import PreviewItem from '@/components/PreviewItem.vue';

export default {
  name: 'MainElectronic',
  components: {
    PreviewItem,
    MainLoader,
  },
  data() {
    return {
      isLoading: false,
      previews: {},
      categories: 'electronics',
    };
  },
  methods: {
    async fetchProducts() {
      try {
        this.isLoading = true;
        // prettier-ignore
        const response = await axios(
          'https://fakestoreapi.com/products/category/electronics?limit=5',
        );
        this.previews[this.categories] = response.data;
        this.isLoading = false;
      } catch (error) {
        this.$emit('elError');
      }
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style lang="scss">
.main-electronic {
  min-height: 700px;
  background-color: rgb(245, 244, 243);
}

.main-electronic__container {
  @include default-container;
}

.main-electronic__title {
  @include main-title;
  margin-bottom: 80px;
}

.main-electronic__wrapper {
  display: flex;
  justify-content: space-between;

  .main-electronic__wrapper-item {
    width: 48%;
  }
}

.main-electronic__text {
  width: 100%;
  margin: 60px 0;
  text-align: center;
}

.main-electronic__description {
  @include main-description;
  display: inline-block;
  max-width: 50%;
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .main-electronic__container {
    padding: 80px 10px;
  }

  .main-electronic__title {
    margin-bottom: 80px;
    font-size: 30px;
    text-align: center;
  }

  .main-electronic__wrapper {
    flex-direction: column;

    .main-electronic__wrapper-item {
      width: 100%;
      margin-bottom: 60px;
    }
  }

  .main-electronic__description {
    max-width: 100%;
    font-size: 18px;
  }
}
</style>
