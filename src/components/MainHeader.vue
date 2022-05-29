<template>
  <div class="mainHeader">
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
    <MainNavigation :navItems="userNavItems" />
    <!-- <MainBin /> -->
  </div>
</template>

<script>
import mainLogoSrc from '@/images/svg/vue-logo.svg';
import MainNavigation from '@/components/MainNavigation.vue';
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
  display: flex;
  justify-content: space-between;
  max-width: 1512px;
  width: 100%;
  margin: 0 auto;
  padding: 0 36px;
  background-color: transparent;
  z-index: 100;
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
</style>
