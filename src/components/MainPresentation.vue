<template>
  <section
    class="main-presentation"
    :style="{
      backgroundImage: `url(${require(`@/images/background/main-bg-${preview.id}.jpeg`)})`,
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
    <div ref="observer" class="main-presentation-observer"></div>
  </section>
</template>

<script>
import MainButton from './MainButton.vue';

export default {
  components: {
    MainButton,
  },
  props: {
    preview: Object,
  },
  mounted() {
    const options = {
      root: document.querySelector('#mainHeader'),
      rootMargin: '0px',
      threshold: 0,
    };

    // const callback = function (entries, observer) {
    //   entries.forEach((entry) => {
    //     console.log(entry.target, observer);
    //   });
    // };

    const onIntersect = (entries) => {
      entries.forEach((entry) => {
        // const theme = entry.target.dataset.section;
        console.log('HEY', entry);
      });
    };

    const observer = new IntersectionObserver(onIntersect, options);
    observer.observe(this.$refs.observer);
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
}

.main-presentation__container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 50px;
  color: $color-yellow;
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

.main-presentation-observer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background-color: lightgreen;
}

@keyframes imageChange {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
