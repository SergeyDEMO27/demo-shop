<template>
  <div class="mainHeader">
    <div class="mainHeader__container">
      <div class="mainHeader__logo">
        <img class="mainHeader__logo-image" :src="mainLogoSrc" alt="my-logo" />
        <h1 class="mainHeader__title">THE SHOP PROJECT LOGO</h1>
      </div>
      <MainNavigation />
    </div>
    <MainUserNavigation />
  </div>
</template>

<script>
import MainNavigation from './MainNavigation.vue';
import MainUserNavigation from './MainUserNavigation.vue';
import mainLogoSrc from '../images/svg/vue-logo.svg';

export default {
  components: {
    MainNavigation,
    MainUserNavigation,
  },
  setup() {
    return {
      mainLogoSrc,
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
