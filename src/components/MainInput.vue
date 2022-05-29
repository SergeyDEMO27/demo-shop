<template>
  <div class="main-input">
    <label class="main-input__label" :for="label">{{ label }}</label>
    <input :id="label" :type="inputType" />
  </div>
</template>

<script>
export default {
  props: {
    inputType: String,
    label: String,
  },
};
</script>

<style lang="scss">
.main-input {
  position: relative;

  .main-input__label {
    position: absolute;
    top: 0;
    left: 0;
    cursor: auto;
    transition: 0.4s;

    &-active {
      top: -25px;
    }
  }

  input {
    width: 100%;
    height: 30px;
    margin-bottom: 40px;
    border: none;
    border-bottom: 1px solid $color-gray;

    &:active,
    &:focus {
      outline: none;
      border-bottom: 1px solid $color-light-black;
    }
  }
}
</style>
