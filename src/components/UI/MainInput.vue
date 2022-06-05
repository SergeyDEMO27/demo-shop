<template>
  <div class="main-input">
    <label
      class="main-input__label"
      :class="{ 'main-input__label-active': isInputActive || inputValue }"
      :for="label"
      >{{ label }}</label
    >
    <input
      :id="label"
      :type="inputType"
      @input="$emit('addInput', $event)"
      :value="inputValue"
      @focus="$emit('inputActive')"
      @blur="$emit('inputNotActive')"
    />
  </div>
</template>

<script>
export default {
  name: 'MainInput',
  props: {
    inputType: String,
    label: String,
    inputValue: String,
    isInputActive: Boolean,
  },
};
</script>

<style lang="scss">
.main-input {
  position: relative;

  .main-input__label {
    @include main-description;
    @include default-transition;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 16px;
    cursor: auto;

    &-active {
      top: -25px;
    }
  }

  input {
    @include main-description;
    width: 100%;
    height: 30px;
    margin-bottom: 40px;
    font-size: 16px;
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
