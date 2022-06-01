<template>
  <MainHeader @openLogin="isLoginForm = true" />
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
          <li
            class="filter-page__item"
            :class="{ 'filter-page__item-active': activeCategory === category }"
            v-for="category in categories"
            :key="category"
          >
            <button @click="fetchCategorieHandler(category)" type="button">{{ category }}</button>
          </li>
        </ul>
      </div>
      <MainLoader
        v-if="isLoading"
        :viewBox="'0 0 400 210'"
        :rectWidth="'100%'"
        :rectHeight="'200px'"
      />
      <AllGoods :products="searchGoods" />
    </div>
  </div>
  <div class="filter-page__sign">
    <div class="filter-page__wrapper">
      <MainSign @showModal="isModalShown = true" />
    </div>
  </div>
  <MainFooter />
  <Transition name="slide-fade">
    <MainModal
      class="filter-page__modal"
      v-show="isModalShown"
      @hideModal="isModalShown = false"
      @click="isModalShown = false"
      @keypress.enter="isModalShown = false"
    >
      <FeedbackModal @click.stop />
      <ButtonClose class="filter-page__close-modal" />
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
</template>

<script>
import axios from 'axios';
import MainLoader from '@/components/MainLoader.vue';
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';
import ProductFilter from '@/components/ProductFilter.vue';
import AllGoods from '@/components/AllGoods.vue';
import MainSign from '@/components/MainSign.vue';
import MainModal from '@/components/MainModal.vue';
import FeedbackModal from '@/components/FeedbackModal.vue';
import ButtonClose from '@/components/ButtonClose.vue';
import MainLogin from '@/components/MainLogin.vue';

export default {
  components: {
    MainHeader,
    MainFooter,
    AllGoods,
    MainSign,
    ProductFilter,
    MainModal,
    FeedbackModal,
    ButtonClose,
    MainLogin,
    MainLoader,
  },
  data() {
    return {
      searchValue: '',
      selectValue: '',
      categories: ['all', 'electronics', 'jewelery', "men's clothing", "women's clothing"],
      activeCategory: 'all',
      products: [],
      selectOptions: [
        { title: 'name up', value: 'titleUp' },
        { title: 'name down', value: 'titleDown' },
        { title: 'price up', value: 'priceUp' },
        { title: 'price down', value: 'priceDown' },
      ],
      isLoading: false,
      isLoginForm: false,
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
        this.isLoading = true;
        const response = await axios.get(
          // eslint-disable-next-line comma-dangle
          `https://fakestoreapi.com/products/category/${this.$route.params.id}`
        );
        this.products = response.data;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCategorieHandler(category) {
      try {
        this.products = [];
        this.isLoading = true;
        // eslint-disable-next-line operator-linebreak
        const path =
          category === 'all'
            ? 'https://fakestoreapi.com/products'
            : `https://fakestoreapi.com/products/category/${category}`;
        const response = await axios.get(path);
        this.products = response.data;
        this.activeCategory = category;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.activeCategory = this.$route.params.id;
    this.fetchCategorie();
  },
  computed: {
    filterGoods() {
      if (this.selectValue === 'priceUp') {
        return [...this.products].sort((a, b) => a.price - b.price);
        // eslint-disable-next-line no-else-return
      } else if (this.selectValue === 'priceDown') {
        return [...this.products].sort((a, b) => b.price - a.price);
      } else if (this.selectValue === 'titleDown') {
        return [...this.products].sort(
          (a, b) =>
            // eslint-disable-next-line comma-dangle, implicit-arrow-linebreak
            b.title.localeCompare(a.title)
          // eslint-disable-next-line function-paren-newline
        );
      }
      return [...this.products].sort(
        (a, b) =>
          // eslint-disable-next-line comma-dangle, implicit-arrow-linebreak
          a.title.localeCompare(b.title)
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

    &-active {
      button {
        color: $color-orange;
        cursor: auto;

        &:hover,
        &:focus {
          &::after {
            width: 0;
          }
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

.filter-page__modal {
  .main-modal__container {
    width: 100%;
  }
}

.filter-page__close-modal {
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
</style>
