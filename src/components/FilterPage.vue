<template>
  <MainHeader />
  <div class="filter-page__goods">
    <div class="filter-page__container">
      <div class="filter-page__wrapper">
        <ProductFilter
          class="filter-page__filter"
          @updateSearch="updateSearchHandler"
          @updateSelect="updateSelectHandler"
          :searchValue="searchValue"
          :selectValue="selectValue"
          :selectOptions="selectOptions"
        />
        <ul class="filter-page__categories">
          <li class="filter-page__item" v-for="category in categories" :key="category">
            <button @click="fetchCategorieHandler(category)" type="button">{{ category }}</button>
          </li>
        </ul>
      </div>
      <AllGoods :products="searchGoods" />
    </div>
  </div>
  <div class="filter-page__sign">
    <div class="filter-page__wrapper">
      <MainSign @showModal="isModalShown = true" />
    </div>
  </div>
  <MainFooter />
  <MainModal v-show="isModalShown" @hideModal="isModalShown = false"><FeedbackModal /></MainModal>
</template>

<script>
import axios from 'axios';
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';
import ProductFilter from '@/components/ProductFilter.vue';
import AllGoods from '@/components/AllGoods.vue';
import MainSign from '@/components/MainSign.vue';
import MainModal from '@/components/MainModal.vue';
import FeedbackModal from './FeedbackModal.vue';

export default {
  components: {
    MainHeader,
    MainFooter,
    AllGoods,
    MainSign,
    ProductFilter,
    MainModal,
    FeedbackModal,
  },
  data() {
    return {
      searchValue: '',
      selectValue: '',
      categories: ['all', 'electronics', 'jewelery', "men's clothing", "women's clothing"],
      // goods: [
      //   {
      //     id: Date.now(),
      //     title: 'watch',
      //     description: 'sadasdasadsasd',
      //     price: 500,
      //     path: '0',
      //   },
      //   {
      //     id: Date.now(),
      //     title: 'mobile',
      //     description: 'sadasdasadsasd',
      //     price: 200,
      //     path: '1',
      //   },
      //   {
      //     id: Date.now(),
      //     title: 'television',
      //     description: 'sadasdasadsasd',
      //     price: 300,
      //     path: '2',
      //   },
      //   {
      //     id: Date.now(),
      //     title: 'audiosystem',
      //     description: 'sadasdasadsasd',
      //     price: 400,
      //     path: '0',
      //   },
      //   {
      //     id: Date.now(),
      //     title: 'computer',
      //     description: 'sadasdasadsasd',
      //     price: 100,
      //     path: '1',
      //   },
      // ],
      products: [],
      selectOptions: [
        { title: 'name', value: 'title' },
        { title: 'price', value: 'price' },
      ],
      isModalShown: false,
    };
  },
  methods: {
    updateSearchHandler(event) {
      this.searchValue = event.target.value;
    },
    updateSelectHandler(event) {
      this.selectValue = event.target.value;
    },
    async fetchCategorie() {
      try {
        const response = await axios.get(
          // eslint-disable-next-line comma-dangle
          `https://fakestoreapi.com/products/category/${this.$route.params.id}`
        );
        this.products = response.data;
        console.log(this.products);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCategorieHandler(category) {
      try {
        console.log(category);
        // eslint-disable-next-line operator-linebreak
        const path =
          category === 'all'
            ? 'https://fakestoreapi.com/products'
            : `https://fakestoreapi.com/products/category/${category}`;
        const response = await axios.get(path);
        this.products = response.data;
        console.log(this.products);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.fetchCategorie();
  },
  computed: {
    filterGoods() {
      if (this.selectValue === 'price') {
        return [...this.products].sort((a, b) => a[this.selectValue] - b[this.selectValue]);
      }
      return [...this.products].sort(
        (a, b) =>
          // eslint-disable-next-line comma-dangle, implicit-arrow-linebreak
          a[this.selectValue]?.localeCompare(b[this.selectValue])
        // eslint-disable-next-line function-paren-newline
      );
    },
    searchGoods() {
      return this.filterGoods.filter(
        ({ title, description }) =>
          // eslint-disable-next-line implicit-arrow-linebreak, operator-linebreak
          title.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase()) ||
          // eslint-disable-next-line comma-dangle,
          description.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase())
      );
    },
  },
};
</script>

<style lang="scss">
.filter-page__goods {
  width: 100%;
  min-height: 400px;
  padding-top: 100px;
  padding-bottom: 60px;
  background-color: $color-default-white;
}

.filter-page__container {
  @include main-container;
  // max-width: 1200px;
  // margin-right: auto;
  // margin-left: auto;
}

.filter-page__wrapper {
  display: flex;
  margin-bottom: 30px;
}

.filter-page__categories {
  @include reset-list;
  display: flex;

  .filter-page__item {
    margin-right: 20px;

    button {
      @include main-title;
      position: relative;
      font-size: 16px;
      background: none;
      border: none;
      cursor: pointer;
      outline: none;

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

      &:hover,
      &:focus {
        &::after {
          width: 100%;
        }
      }
    }
  }
}

.filter-page__sign {
  width: 100%;
  min-height: 400px;
  padding: 60px 0;
  background-color: $color-yellow;

  .filter-page__wrapper {
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
  }
}
</style>
