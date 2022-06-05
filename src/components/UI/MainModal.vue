<template>
  <div class="main-modal">
    <div class="main-modal__container">
      <div class="main-modal__wrapper"></div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainModal',
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
  @include center-element;
  max-width: 1250px;
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
</style>
