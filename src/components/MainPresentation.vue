<template>
  <section class="main-presentation">
    <img
      class="main-presentation__image"
      :src="require(`@/images/background/main-bg-${previewId}.jpeg`)"
      :key="`main-bg-${previewId}`"
      alt="bg"
    />
  </section>
</template>

<script>
export default {
  props: {
    previewId: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.main-presentation__image {
  max-width: 100%;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: center;
  animation: imageChange 1.5s;
  opacity: 1;
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
