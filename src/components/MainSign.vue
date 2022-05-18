<template>
  <section class="main-sign">
    <h2 class="main-sign__title">JOIN THE SHOP PROJECT</h2>
    <p class="main-sign__description">
      Enjoy new and limited products, exclusive events, special offers and much more before anyone
      else.
    </p>
    <MainButton>Sign up now</MainButton>
  </section>
</template>

<script>
import MainButton from './MainButton.vue';

export default {
  components: {
    MainButton,
  },
};
</script>

<style lang="scss">
.main-sign {
  position: relative;
  padding-top: 100px;

  &::after {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 75px;
    height: 75px;
    content: '\2709';
    background-color: $color-orange;
    border-radius: 50%;
  }
}

.main-sign__title {
  @include main-title;
  margin-bottom: 20px;
  font-size: 20px;
}

.main-sign__description {
  @include main-description;
  margin-bottom: 40px;
  color: #555555;
}
</style>
