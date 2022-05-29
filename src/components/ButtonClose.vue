<template>
  <button class="button-close" type="button"></button>
</template>

<script>
export default {};
</script>

<style lang="scss">
.button-close {
  width: 17px;
  height: 17px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    top: 8px;
    right: 0;
    width: 100%;
    height: 2px;
    content: '';
    background-color: rgba(0, 0, 0, 50%);
    transform: rotate(45deg);
    transition: 0.4s;
  }

  &::after {
    transform: rotate(-45deg);
  }

  &:hover {
    &::before,
    &::after {
      background-color: $color-default-black;
    }
  }
}
</style>
