<template>
  <section class="main-feedback">
    <div class="main-feedback__container">
      <FeedbackModal />
    </div>
  </section>
</template>

<script>
import FeedbackModal from '@/components/FeedbackModal.vue';

export default {
  components: {
    FeedbackModal,
  },
};
</script>

<style lang="scss">
.main-feedback {
  // padding-top: 60px;
  // padding-bottom: 60px;
  background-color: $color-light-black;
  min-height: 700px;
}

.main-feedback__container {
  @include default-container;
  max-width: 1300px;
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .main-feedback__container {
    padding: 80px 10px;
  }
}
</style>
