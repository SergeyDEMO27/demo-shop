<template>
  <section class="main-sign">
    <h2 class="main-sign__title">JOIN THE DEMO SHOP</h2>
    <p class="main-sign__description">
      Enjoy new and limited products, exclusive events, special offers and much more before anyone
      else.
    </p>
    <MainButton class="main-sign__button" @click.prevent="$emit('showModal')"
      >Sign up now</MainButton
    >
  </section>
</template>

<script>
import MainButton from '@/components/UI/MainButton.vue';

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
    content: '';
    background-color: $color-orange;
    background-image: url('~@/assets/images/background/envelope.png');
    background-size: 60% auto;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
  }
}

.main-sign__title {
  @include main-title;
  margin-bottom: 20px;
  font-size: 20px;
  text-transform: uppercase;
}

.main-sign__description {
  @include main-description;
  margin-bottom: 40px;
  color: #555555;
}

.main-sign__button {
  display: inline-block;
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .main-sign {
    &::after {
      width: 70px;
      height: 70px;
    }
  }

  .main-sign__title {
    font-size: 18px;
  }

  .main-sign__description {
    font-size: 18px;
  }
}
</style>
