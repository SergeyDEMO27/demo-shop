<template>
  <a v-if="buttonType === 'link'" class="main-button" href="#">
    <slot></slot>
  </a>
  <button v-else class="main-button" type="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    buttonType: String,
  },
};
</script>

<style lang="scss">
.main-button {
  @include main-title;
  @include default-transition;
  display: inline-block;
  min-width: 140px;
  padding: 10px 32px;
  font-size: 16px;
  color: $color-black;
  text-transform: capitalize;
  text-align: center;
  border: 2px solid $color-black;
  border-radius: 24px;
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background-color: $color-orange;
    border-color: $color-orange;
  }
}
</style>
