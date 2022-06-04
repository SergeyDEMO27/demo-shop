<template>
  <section
    class="main-presentation"
    :style="{
      backgroundImage: `url(${require(`@/assets/images/background/main-bg-${preview.id}.jpeg`)})`,
    }"
  >
    <div class="main-presentation__container">
      <p class="main-presentation__title">{{ preview.title }}</p>
      <p class="main-presentation__description">
        {{ preview.description }}
      </p>
      <router-link :to="`/products/${preview.link}`" class="mainNavigation__link" href="#"
        ><MainButton class="main-presentation__link">Discover More</MainButton>
      </router-link>
    </div>
  </section>
</template>

<script>
import MainButton from '@/components/UI/MainButton.vue';

export default {
  components: {
    MainButton,
  },
  props: {
    preview: Object,
  },
};
</script>

<style lang="scss">
.main-presentation {
  position: relative;
  max-width: 100%;
  width: 100vw;
  height: 50vh;
  min-height: 640px;
  padding-top: 20vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-color: $color-default-black;
    opacity: 20%;
  }
}

.main-presentation__container {
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 50px;
  color: $color-yellow;
  z-index: 10;
}

.main-presentation__title {
  @include main-title;
  max-width: 50%;
  margin-bottom: 20px;
  font-size: 46px;
}

.main-presentation__description {
  @include main-description;
  max-width: 35%;
  margin-bottom: 20px;
  font-size: 22px;
}

.main-presentation__link {
  display: inline-block;
  a {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: $color-orange;
    border: none;
    &:hover {
      background-color: $color-default-white;
    }
  }
}

@keyframes imageChange {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

@media (min-width: $viewport--md) and (max-width: $viewport--lg) {
  .main-presentation {
    height: 40vh;
    min-height: 540px;
  }

  .main-presentation__title {
    max-width: 80%;
  }

  .main-presentation__description {
    max-width: 50%;
  }
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .main-presentation {
    height: 40vh;
    min-height: 540px;
  }

  .main-presentation__container {
    max-width: 450px;
    padding: 60px 10px;
  }

  .main-presentation__title {
    max-width: 80%;
    font-size: 30px;
  }

  .main-presentation__description {
    max-width: 80%;
    font-size: 20px;
  }
}
</style>
