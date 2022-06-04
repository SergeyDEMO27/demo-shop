<template>
  <content-loader v-if="viewBox" :viewBox="viewBox">
    <rect x="0" y="0" rx="4" ry="4" :width="rectWidth" :height="rectHeight" />
  </content-loader>
  <content-loader v-else>
    <rect x="0" y="0" rx="4" ry="4" :width="rectWidth" :height="rectHeight" />
  </content-loader>
</template>

<script>
import { ContentLoader } from 'vue-content-loader';

export default {
  components: {
    ContentLoader,
  },
  props: {
    viewBox: String,
    rectWidth: String,
    rectHeight: String,
  },
};
</script>

<style></style>
