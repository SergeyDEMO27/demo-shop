<template>
  <div class="filter-page">
    <MainHeader @openLogin="isLoginForm = true" />
    <div class="filter-page__main">
      <div class="filter-page__goods">
        <div class="filter-page__container">
          <div class="filter-page__wrapper">
            <ProductFilter
              class="filter-page__filter"
              v-model:select="selectValue"
              v-model:search="searchValue"
              :selectOptions="selectOptions"
            />
            <ul class="filter-page__categories">
              <li
                class="filter-page__item"
                :class="{ 'filter-page__item-active': activeCategory === category }"
                v-for="category in categories"
                :key="category"
              >
                <button @click="fetchCategory(category)" type="button">
                  {{ category }}
                </button>
              </li>
            </ul>
          </div>
          <MainLoader
            v-if="isLoading"
            :viewBox="'0 0 400 210'"
            :rectWidth="'100%'"
            :rectHeight="'200px'"
          />
          <AllGoods v-if="filterSearchedProducts.length" :products="filterSearchedProducts" />
        </div>
      </div>
      <div class="filter-page__sign">
        <div class="filter-page__wrapper">
          <MainSign @showModal="isModalShown = true" />
        </div>
      </div>
    </div>
    <MainFooter />
    <Transition name="slide-fade">
      <MainModal
        class="filter-page__modal"
        v-if="isModalShown"
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
        v-if="isLoginForm"
        @click="isLoginForm = false"
        @keypress.enter="isLoginForm = false"
      >
        <MainLogin @click.stop @closeForm="isLoginForm = false" />
        <ButtonClose class="main-page__close" />
      </MainModal>
    </Transition>
    <Transition name="slide-fade">
      <MainModal v-if="isError" @click="isError = false" @keypress.enter="isError = false">
        <MainError>Something went wrong. Try to reload page</MainError>
      </MainModal>
    </Transition>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import useCategories from '@/hooks/useCategories';
import useFilteredProducts from '@/hooks/useFilteredProducts';
import useFilterSearchedProducts from '@/hooks/useFilterSearchedProducts';
import MainHeader from '@/components/MainHeader.vue';
import ProductFilter from '@/components/ProductFilter.vue';
import AllGoods from '@/components/AllGoods.vue';
import MainSign from '@/components/MainSign.vue';
import MainFooter from '@/components/MainFooter.vue';
import MainModal from '@/components/UI/MainModal.vue';
import FeedbackModal from '@/components/FeedbackModal.vue';
import ButtonClose from '@/components/UI/ButtonClose.vue';
import MainLogin from '@/components/MainLogin.vue';
import MainError from '@/components/UI/MainError.vue';
import MainLoader from '@/components/UI/MainLoader.vue';

export default {
  name: 'FilterPage',
  components: {
    MainHeader,
    AllGoods,
    MainSign,
    ProductFilter,
    MainFooter,
    MainModal,
    FeedbackModal,
    ButtonClose,
    MainLogin,
    MainError,
    MainLoader,
  },
  data() {
    return {
      categories: ['all', 'electronics', 'jewelery', "men's clothing", "women's clothing"],
      selectOptions: [
        { title: 'name up', value: 'titleUp' },
        { title: 'name down', value: 'titleDown' },
        { title: 'price up', value: 'priceUp' },
        { title: 'price down', value: 'priceDown' },
      ],
      isLoginForm: false,
      isModalShown: false,
    };
  },

  setup() {
    const route = useRoute();
    // prettier-ignore
    const {
      fetchCategory, products, activeCategory, isLoading, isError,
    } = useCategories(route.params.id);

    const { filteredProducts, selectValue } = useFilteredProducts(products);
    const { filterSearchedProducts, searchValue } = useFilterSearchedProducts(filteredProducts);

    return {
      fetchCategory,
      products,
      filterSearchedProducts,
      activeCategory,
      selectValue,
      searchValue,
      isLoading,
      isError,
    };
  },
};
</script>

<style lang="scss">
.filter-page {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.filter-page__main {
  flex: 1 1 auto;
}

.filter-page__goods {
  width: 100%;
  min-height: 400px;
  padding-top: 100px;
  padding-bottom: 60px;
  background-color: $color-default-white;
}

.filter-page__container {
  @include default-container;
}

.filter-page__wrapper {
  display: flex;
  margin-bottom: 40px;
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
        @include default-transition;
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        content: '';
        background-color: $color-orange;
        border-radius: 25px;
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
  padding: 60px 10px;
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
    width: 96%;
  }
}

.filter-page__close-modal {
  position: absolute;
  top: 10px;
  right: 20px;
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

@media (min-width: $viewport--md) and (max-width: $viewport--lg) {
  .filter-page__wrapper {
    flex-direction: column;
  }

  .filter-page__filter {
    margin-bottom: 20px;
  }
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .filter-page__container {
    @include default-container;
    padding-right: 10px;
    padding-left: 10px;
  }

  .filter-page__wrapper {
    flex-direction: column;
    align-items: center;
  }

  .filter-page__filter {
    margin-bottom: 20px;
  }

  .filter-page__categories {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .filter-page__item {
      margin-right: 20px;
      margin-bottom: 10px;

      button {
        font-size: 14px;
      }
    }
  }

  .filter-page__modal {
    max-height: unset;
  }
}
</style>
