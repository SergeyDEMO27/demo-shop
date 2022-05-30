<template>
  <div id="mainHeader" class="mainHeader">
    <div class="mainHeader__wrapper">
      <div class="mainHeader__container">
        <div v-if="isMainPage" class="mainHeader__logo">
          <img class="mainHeader__logo-image" :src="mainLogoSrc" alt="my-logo" />
          <h1 class="mainHeader__title">THE SHOP PROJECT LOGO</h1>
        </div>
        <router-link to="/" v-else class="mainHeader__logo">
          <img class="mainHeader__logo-image" :src="mainLogoSrc" alt="my-logo" />
          <h1 class="mainHeader__title">THE SHOP PROJECT LOGO</h1>
        </router-link>
        <MainNavigation :navItems="mainNavItems" />
      </div>
      <div class="mainHeader__user-nav">
        <div @click="$emit('openLogin')" @keypress.enter="$emit('openLogin')">
          <svg
            class="main-header__icon main-header__icon-login"
            width="20"
            height="20"
            viewBox="0 0 256 256"
          >
            <use :href="`${sprite}#icon-login`"></use>
          </svg>
          <span>login</span>
        </div>
        <div>
          <svg
            class="main-header__icon main-header__icon-bin"
            width="22"
            height="22"
            viewBox="0 0 446 446"
          >
            <use :href="`${sprite}#icon-bin`"></use>
          </svg>
          <span>shoping-cart</span>
        </div>
      </div>
    </div>
    <!-- <MainNavigation :navItems="userNavItems" /> -->
    <!-- <MainBin /> -->
  </div>
</template>

<script>
import mainLogoSrc from '@/images/svg/vue-logo.svg';
import MainNavigation from '@/components/MainNavigation.vue';
import sprite from '@/images/sprite/sprite.svg';
// import MainBin from '@/components/MainBin.vue';

export default {
  components: {
    MainNavigation,
    // MainBin,
  },
  props: {
    isMainPage: Boolean,
  },
  setup() {
    return {
      mainLogoSrc,
      sprite,
    };
  },
  data() {
    return {
      mainNavItems: ['electronics', 'jewelery', "men's clothing", "women's clothing"],
      userNavItems: ['login', 'basket'],
    };
  },
};
</script>

<style lang="scss">
.mainHeader {
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  // display: flex;
  // justify-content: space-between;
  max-width: 1512px;
  width: 100%;
  margin: 0 auto;
  padding: 0 36px;
  background-color: transparent;
  z-index: 100;

  &-moved {
    background-color: red;
  }
}

.mainHeader__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mainHeader__container {
  display: flex;
  align-items: center;
}

.mainHeader__logo {
  padding-top: 10px;

  .mainHeader__logo-image {
    width: 60px;
  }

  .mainHeader__title {
    @include visually-hidden;
  }
}

.mainHeader__user-nav {
  display: flex;
  align-items: center;

  span {
    @include visually-hidden;
  }
}

.main-header__icon {
  fill: $color-default-white;
  transition: 0.4s;

  &-login {
    cursor: pointer;
  }

  &-bin {
    margin-left: 30px;
  }

  &:hover {
    fill: $color-orange;
  }
}
</style>
