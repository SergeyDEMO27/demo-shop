<template>
  <div class="main-modal" @click="$emit('hideModal')" @keypress.enter="$emit('hideModal')">
    <div @click.stop class="main-modal__container">
      <div class="main-modal__wrapper">
        <ButtonClose class="main-modal__close" @click="$emit('hideModal')" />
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ButtonClose from '@/components/ButtonClose.vue';

export default {
  components: {
    ButtonClose,
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
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: rgba(0, 0, 0, 50%);
  z-index: 10000;
}

.main-modal__container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 1250px;
  width: 100%;
  padding-right: 25px;
  padding-left: 25px;
}

.main-modal__wrapper {
  position: relative;
}

.main-modal__close {
  position: absolute;
  top: 10px;
  right: 15px;
}
</style>
