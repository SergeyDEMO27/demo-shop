<template>
  <div class="main-modal">
    <div class="main-modal__container">
      <div class="main-modal__wrapper">
        <!-- <ButtonClose class="main-modal__close" @click="$emit('hideModal')" /> -->
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import ButtonClose from '@/components/ButtonClose.vue';

export default {
  components: {
    // ButtonClose,
  },
};
</script>

<style lang="scss">
.main-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 60px 20px;
  background-color: rgba(0, 0, 0, 50%);
  z-index: 10000;
  overflow-y: scroll;
}

.main-modal__container {
  position: absolute;
  left: 50%;
  // top: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 1250px;
  // width: 100%;
  // padding: inherit;
}

.main-modal__wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.main-modal__close {
  position: absolute;
  top: 10px;
  right: 15px;
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  // .main-modal__container {
  //   top: 111%;
  // }
}
</style>
