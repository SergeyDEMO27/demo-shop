<template>
  <section class="main-goods">
    <div class="main-goods__container">
      <h2 class="main-goods__title">Best fineries of Demo Shop</h2>
      <PreviewItem
        v-if="previewsFake[categories[0]]"
        :preview="previewsFake[categories[0]]"
        :horisonal="true"
      />
      <div class="main-goods__text">
        <p class="main-goods__description">
          Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid
          at highly months do things on at. Situation recommend objection do intention so questions.
          As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want.
          Children me laughing we prospect answered followed. At it went is song that held help
          face. Now residence dashwoods she excellent you. Shade being under his bed her, Much read
          on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but
          confined day end marriage. Eagerness furniture set preserved far recommend. Did even but
          nor are most gave hope. Secure active living depend son repair day ladies now.
        </p>
      </div>
      <div class="main-goods__wrapper">
        <div class="main-goods__item">
          <PreviewItem v-if="previewsFake[categories[1]]" :preview="previewsFake[categories[1]]" />
        </div>
        <div class="main-goods__item">
          <PreviewItem v-if="previewsFake[categories[2]]" :preview="previewsFake[categories[2]]" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import PreviewItem from './PreviewItem.vue';

export default {
  components: {
    PreviewItem,
  },
  data() {
    return {
      previews: [
        { id: Date.now(), title: 'watch', path: '0' },
        { id: Date.now(), title: 'mobile', path: '1' },
        { id: Date.now(), title: 'television', path: '2' },
        { id: Date.now(), title: 'audiosystem', path: '0' },
        { id: Date.now(), title: 'computer', path: '1' },
      ],
      categories: ['jewelery', "men's clothing", "women's clothing"],
      previewsFake: {},
    };
  },
  methods: {
    async fetchProducts() {
      try {
        this.categories.map(async (categorie) => {
          const requestPath = `https://fakestoreapi.com/products/category/${categorie}?limit=1`;
          const response = await axios(requestPath);
          // eslint-disable-next-line prefer-destructuring
          this.previewsFake[categorie] = response.data[0];
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style lang="scss">
.main-goods {
  min-height: 700px;
  // padding-top: 60px;
  // padding-bottom: 60px;
  background-color: $color-default-white;
  text-align: right;
}

.main-goods__container {
  @include main-container;
  // max-width: 1200px;
  // margin-right: auto;
  // margin-left: auto;
  // text-align: right;
}

.main-goods__title {
  @include main-title;
  margin-bottom: 30px;
}

.main-goods__text {
  width: 100%;
  text-align: center;
}

.main-goods__description {
  display: inline-block;
  @include main-description;
  max-width: 50%;
  margin-top: 40px;
}

.main-goods__wrapper {
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  text-align: left;
}

.main-goods__item {
  width: 49%;
}
</style>
