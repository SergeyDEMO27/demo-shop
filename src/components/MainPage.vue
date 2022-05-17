<template>
  <MainHeader @create="changePreviewId" />
  <MainPresentation :previewId="previewId" />
  <AboutUs />
  <MainElectronic />
  <MainGoods />
  <MainFeedback />
  <MainFooter />
</template>

<script>
// import axios from 'axios';
import MainHeader from './MainHeader.vue';
import MainPresentation from './MainPresentation.vue';
import AboutUs from './AboutUs.vue';
import MainElectronic from './MainElectronic.vue';
import MainGoods from './MainGoods.vue';
import MainFeedback from './MainFeedback.vue';
import MainFooter from './MainFooter.vue';

export default {
  components: {
    MainHeader,
    MainPresentation,
    AboutUs,
    MainElectronic,
    MainGoods,
    MainFeedback,
    MainFooter,
  },
  data() {
    return {
      previewId: '0',
    };
  },
  methods: {
    changePreviewId(id) {
      this.previewId = id;
    },
  },
};
</script>

<style></style>
