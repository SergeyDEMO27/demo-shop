<template>
  <MainHeader @create="changePreviewId" />
  <MainPresentation :previewId="previewId" />
  <AboutUs />
  <MainElectronic />
</template>

<script>
// import axios from 'axios';
import MainHeader from './MainHeader.vue';
import MainPresentation from './MainPresentation.vue';
import AboutUs from './AboutUs.vue';
import MainElectronic from './MainElectronic.vue';

export default {
  components: {
    MainHeader,
    MainPresentation,
    AboutUs,
    MainElectronic,
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
