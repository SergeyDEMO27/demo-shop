<template>
  <div id="mainHeader" class="mainHeader" :class="{ 'mainHeader-moved': !isMainPage }">
    <div class="mainHeader__wrapper">
      <div class="mainHeader__container">
        <div v-if="isMainPage" class="mainHeader__logo">
          <img class="mainHeader__logo-image" :src="mainLogoSrc" alt="my-logo" />
          <h1 class="mainHeader__title">The Demo Shop LOGO</h1>
        </div>
        <router-link to="/" v-else class="mainHeader__logo">
          <img class="mainHeader__logo-image" :src="mainLogoSrc" alt="my-logo" />
          <h1 class="mainHeader__title">The Demo Shop</h1>
        </router-link>
        <MainNavigation class="mainHeader__nav" :navItems="mainNavItems" />
      </div>
      <div class="mainHeader__user-nav">
        <div
          class="main-header__login"
          @click="$emit('openLogin')"
          @keypress.enter="$emit('openLogin')"
          tabindex="0"
        >
          <svg
            class="main-header__icon main-header__icon-login"
            width="20"
            height="20"
            viewBox="0 0 256 256"
          >
            <use :href="`${sprite}#icon-login`"></use>
          </svg>
          <span class="mainHeader__user-nav-label">login</span>
        </div>
        <div class="main-header__bin" tabindex="0">
          <svg
            class="main-header__icon main-header__icon-bin"
            width="22"
            height="22"
            viewBox="0 0 446 446"
          >
            <use :href="`${sprite}#icon-bin`"></use>
          </svg>
          <span class="mainHeader__user-nav-label">shoping-cart</span>
          <MainBin class="main-header__bin-item" tabindex="0" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainNavigation from '@/components/MainNavigation.vue';
import MainBin from '@/components/MainBin.vue';
import mainLogoSrc from '@/assets/images/svg/main-logo.svg';
import sprite from '@/assets/images/sprite/sprite.svg';

export default {
  name: 'MainHeader',
  components: {
    MainNavigation,
    MainBin,
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
  @include default-transition;
  position: fixed;
  width: 100%;
  height: 60px;
  z-index: 100;

  &-moved {
    background-color: $color-default-white;
    box-shadow: 0px 4px 6px -3px rgba(34, 60, 80, 0.6);

    .mainHeader__wrapper {
      .mainHeader__logo-image {
        width: 40px;
      }

      .mainNavigation__link {
        color: $color-default-black;
      }
    }
    .main-header__login,
    .main-header__bin {
      .main-header__icon {
        fill: $color-default-black;
      }
    }
  }
}

.mainHeader__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 50px;
}

.mainHeader__container {
  display: flex;
  align-items: center;
}

.mainHeader__logo {
  .mainHeader__logo-image {
    width: 60px;
    transition: 0.4s;
  }

  .mainHeader__title {
    @include visually-hidden;
  }
}

.mainHeader__user-nav {
  display: flex;
  align-items: center;

  &-label {
    @include visually-hidden;
  }
}

.main-header__login,
.main-header__bin {
  outline: none;

  .main-header__icon {
    @include default-transition;
    fill: $color-default-white;

    &-login {
      cursor: pointer;
    }

    &-bin {
      margin-left: 30px;
    }
  }

  &:hover,
  &:focus {
    .main-header__icon {
      fill: $color-orange;
    }
  }
}

.main-header__bin {
  position: relative;

  &-item .main-bin__main {
    position: absolute;
    top: 25px;
    right: 0;
    visibility: hidden;
    opacity: 0;

    transition: 0.1s;
  }

  &:hover,
  &:focus {
    .main-header__bin-item .main-bin__main {
      visibility: visible;
      opacity: 1;
    }
  }
}

.main-header__bin-item {
  &:focus {
    visibility: visible;
    opacity: 1;
  }
}

@media (min-width: $viewport--md) and (max-width: $viewport--lg) {
  .mainHeader__wrapper {
    align-items: center;
    padding: 0 30px;
  }

  .mainHeader__user-nav {
    margin-left: auto;
  }
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .mainHeader {
    height: 100px;
  }

  .mainHeader__wrapper {
    max-width: 450px;
    padding: 0 10px;
  }

  .mainHeader__logo {
    .mainHeader__logo-image {
      width: 40px;
    }
  }

  .mainHeader__user-nav {
    flex-direction: column;
    justify-content: flex-end;
  }

  .main-header__icon-bin {
    margin-left: 0;
  }
}
</style>
