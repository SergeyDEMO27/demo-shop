<template>
  <section class="about-us">
    <div class="about-us__preview">
      <CategoryPreviews :previews="previews" />
    </div>
    <h2 class="about-us__title">Your senses. Set free.</h2>
    <p class="about-us__description">
      Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at
      highly months do things on at. Situation recommend objection do intention so questions. As
      greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children
      me laughing we prospect answered followed. At it went is song that held help face.
      <br />
      <br />
      Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as
      draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day
      end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave
      hope. Secure active living depend son repair day ladies now.
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
          title: 'cloth',
          path: '2',
          link: "MEN'S CLOTHING",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.about-us {
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
  margin-bottom: 30px;
  font-family: 'Supreme', Arial, Helvetica, sans-serif;
  font-size: 38px;
  letter-spacing: 0.09rem;
  text-transform: capitalize;
}

.about-us__description {
  max-width: 510px;
  margin-right: auto;
  margin-left: auto;
  font-family: 'Supreme', Arial, Helvetica, sans-serif;
  font-size: 20px;
  // letter-spacing: 0.07rem;
}
</style>
