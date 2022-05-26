<template>
  <section class="main-electronic">
    <div class="main-electronic__container">
      <h2 class="main-electronic__title">Best Electronic of West Coast</h2>
      <div class="main-electronic__preview">
        <ProductPreview :previews="previews" />
      </div>
      <div class="main-electronic__wrapper">
        <div class="main-electronic__wrapper-item">
          <!-- <PreviewItem :preview="previews" /> -->
        </div>
        <div class="main-electronic__wrapper-item">
          <p class="main-electronic__description">
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            Afraid at highly months do things on at. Situation recommend objection do intention so
            questions. As greatly removed calling pleased improve an. Last ask him cold feel met
            spot shy want. Children me laughing we prospect answered followed. At it went is song
            that held help face.
            <br />
            <br />
            Now residence dashwoods she excellent you. Shade being under his bed her, Much read on
            as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but
            confined day end marriage. Eagerness furniture set preserved far recommend. Did even but
            nor are most gave hope. Secure active living depend son repair day ladies now.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import CategoryPreviews from './CategoryPreviews.vue';
import ProductPreview from './ProductPreview.vue';
// import PreviewItem from './PreviewItem.vue';

export default {
  components: {
    ProductPreview,
    // PreviewItem,
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
    };
  },
};
</script>

<style lang="scss">
.main-electronic {
  min-height: 700px;
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: rgb(245, 244, 243);
}

.main-electronic__container {
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
}

.main-electronic__title {
  margin-bottom: 30px;
  font-family: 'Lexend Deca', Arial, Helvetica, sans-serif;
  font-size: 38px;
  font-weight: normal;
  text-transform: capitalize;
}

.main-electronic__preview {
  margin-bottom: 100px;
}

.main-electronic__wrapper {
  display: flex;
  justify-content: space-between;

  .main-electronic__wrapper-item {
    width: 47%;
  }
}

.main-electronic__description {
  max-width: 600px;
  margin-left: auto;
  font-family: 'Supreme', Arial, Helvetica, sans-serif;
  font-size: 20px;
  text-indent: 40px;
}
</style>
