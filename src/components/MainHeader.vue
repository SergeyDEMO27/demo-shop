<template>
  <div class="mainHeader">
    <div class="mainHeader__container">
      <div class="mainHeader__logo">
        <img class="mainHeader__logo-image" :src="mainLogoSrc" alt="my-logo" />
        <h1 class="mainHeader__title">THE SHOP PROJECT LOGO</h1>
      </div>
      <MainNavigation @create="changePreviewId" :navItems="mainNavItems" />
    </div>
    <MainNavigation :navItems="userNavItems" />
  </div>
</template>

<script>
import MainNavigation from './MainNavigation.vue';
import mainLogoSrc from '../images/svg/vue-logo.svg';

export default {
  components: {
    MainNavigation,
  },
  setup() {
    return {
      mainLogoSrc,
    };
  },
  data() {
    return {
      mainNavItems: ['electronics', 'jewelry', 'men"s clothing', 'women"s clothing'],
      userNavItems: ['login', 'basket'],
    };
  },
  methods: {
    changePreviewId(id) {
      this.$emit('create', id);
    },
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
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
}
</style>
