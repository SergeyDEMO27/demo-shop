<template>
  <section class="about-us">
    <div ref="observer" class="about-us__observer"></div>
    <div class="about-us__preview">
      <CategoryPreviews :previews="previews" />
    </div>
    <h2 class="about-us__title">Set Your Passions Free</h2>
    <p class="about-us__description">
      An accessories boutique focused on creating a pleasant shopping experience for visitors and
      locals alike. Our carefully curated wares are both fashion forward and classic, featuring all
      kind of electronic devices, sterling silver and costume jewelry, handbags, hats, scarves,
      bridal and evening accessories, and much more.
    </p>
  </section>
</template>

<script>
import CategoryPreviews from './CategoryPreviews.vue';

export default {
  components: {
    CategoryPreviews,
  },

  data() {
    return {
      scrollPosition: 0,
      previews: [
        {
          id: Date.now(),
          title: 'electronics',
          path: '0',
          link: 'electronics',
        },
        {
          id: Date.now(),
          title: 'jewels',
          path: '1',
          link: 'jewelery',
        },
        {
          id: Date.now(),
          title: 'clothing',
          path: '2',
          link: "men's clothing",
        },
      ],
    };
  },
  mounted() {
    const header = document.querySelector('#mainHeader');
    const thresholdArray = (steps) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      Array(steps + 1)
        .fill(0)
        .map((_, index) => index / steps || 0);

    let previousY = 0;
    let previousRatio = 0;

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        const currentY = entry.boundingClientRect.y;
        const currentRatio = entry.intersectionRatio;
        // eslint-disable-next-line prefer-destructuring
        const isIntersecting = entry.isIntersecting;

        if (currentY < previousY) {
          if (currentRatio > previousRatio && isIntersecting) {
            header.className = 'mainHeader';
          } else {
            header.className = 'mainHeader mainHeader-moved';
          }
        } else if (currentY > previousY && isIntersecting) {
          if (currentRatio > previousRatio) {
            header.className = 'mainHeader';
          }
        }

        previousY = currentY;
        previousRatio = currentRatio;
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: thresholdArray(1),
    });

    observer.observe(this.$refs.observer);
  },
};
</script>

<style lang="scss">
.about-us {
  position: relative;
  min-height: 700px;
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: $color-yellow;
  text-align: center;
}

.about-us__preview {
  max-width: 1200px;
  margin: auto;
  margin-bottom: 100px;
}

.about-us__title {
  @include main-description;
  margin-bottom: 30px;
  font-size: 38px;
  letter-spacing: 0.09rem;
  text-transform: capitalize;
}

.about-us__description {
  @include main-description;
  max-width: 510px;
  margin-right: auto;
  margin-left: auto;
  font-size: 20px;
}

.about-us__observer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
}
</style>
