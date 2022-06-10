<template>
  <section class="main-goods">
    <div class="main-goods__container">
      <h2 class="main-goods__title">Best fineries of Demo Shop</h2>
      <MainLoader
        v-if="isLoading"
        :viewBox="'0 0 400 110'"
        :rectWidth="'100%'"
        :rectHeight="'100px'"
      />
      <PreviewItem
        v-if="previewsFake[categories[0]]"
        :preview="previewsFake[categories[0]]"
        :horisonal="true"
      />
      <div class="main-goods__text">
        <p class="main-goods__description">
          Caters to thoughtful shoppers who appreciate unique designs and top quality pieces you
          just can’t find anywhere else. We are constantly curating fresh new collections and
          looking for the next big thing our customers will love. Our Mission is to make a
          difference through our branding by staying ahead of the fashion trends, defining style and
          giving customers what they want.
        </p>
      </div>
      <div class="main-goods__wrapper">
        <div class="main-goods__item">
          <MainLoader
            v-if="isLoading"
            :viewBox="'0 0 97 100'"
            :rectWidth="'100%'"
            :rectHeight="'100px'"
          />
          <PreviewItem v-if="previewsFake[categories[1]]" :preview="previewsFake[categories[1]]" />
        </div>
        <div class="main-goods__item">
          <MainLoader
            v-if="isLoading"
            :viewBox="'0 0 97 100'"
            :rectWidth="'100%'"
            :rectHeight="'100px'"
          />
          <PreviewItem v-if="previewsFake[categories[2]]" :preview="previewsFake[categories[2]]" />
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
  name: 'MainGoods',
  components: {
    PreviewItem,
    MainLoader,
  },
  data() {
    return {
      isLoading: false,
      categories: ['jewelery', "men's clothing", "women's clothing"],
      previewsFake: {},
    };
  },
  methods: {
    fetchProducts() {
      this.categories.map(async (categorie) => {
        try {
          this.isLoading = true;
          // prettier-ignore
          const response = await axios.get(
            `https://fakestoreapi.com/products/category/${categorie}`,
            {
              params: {
                limit: 1,
              },
            },
          );
          // eslint-disable-next-line prefer-destructuring
          this.previewsFake[categorie] = response.data[0];
          this.isLoading = false;
        } catch (error) {
          this.$emit('goodError');
        }
      });
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style lang="scss">
.main-goods {
  min-height: 700px;
  background-color: $color-default-white;
  text-align: right;
}

.main-goods__container {
  @include default-container;
}

.main-goods__title {
  @include main-title;
  margin-bottom: 80px;
}

.main-goods__text {
  width: 100%;
  margin: 60px 0;
  text-align: center;
}

.main-goods__description {
  @include main-description;
  display: inline-block;
  max-width: 50%;
}

.main-goods__wrapper {
  display: flex;
  justify-content: space-between;
  text-align: left;
}

.main-goods__item {
  width: 49%;
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .main-goods__container {
    padding: 80px 10px;
  }

  .main-goods__title {
    margin-bottom: 80px;
    font-size: 30px;
    text-align: center;
  }

  .main-goods__wrapper {
    flex-direction: column;

    .main-goods__item {
      width: 100%;
      margin-bottom: 60px;
    }
  }

  .main-goods__description {
    max-width: 100%;
    font-size: 18px;
  }
}
</style>
