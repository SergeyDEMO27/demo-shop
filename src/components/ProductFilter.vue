<template>
  <form @submit.prevent class="product-filter">
    <select
      class="product-filter__select"
      name=""
      id=""
      @change="$emit('updateSelect', $event)"
      :value="selectValue"
    >
      <option value="" disabled selected>Filter by</option>
      <option v-for="option in selectOptions" :key="option.title" :value="option.value">
        {{ option.title }}
      </option>
    </select>
    <div class="product-filter__item">
      <label
        class="product-filter__label"
        :class="{ 'product-filter__label-active': searchValue || isInputActive }"
        for="searchProduct"
        >Search</label
      >
      <input
        class="product-filter__input"
        :class="{ 'product-filter__input-active': searchValue || isInputActive }"
        @input="$emit('updateSearch', $event)"
        @focus="isInputActive = true"
        @blur="isInputActive = false"
        id="searchProduct"
        type="search"
        :value="searchValue"
      />
    </div>
  </form>
</template>

<script>
export default {
  props: {
    searchValue: String,
    selectValue: String,
    selectOptions: Array,
  },
  data() {
    return {
      isInputActive: false,
    };
  },
};
</script>

<style lang="scss">
.product-filter {
  display: flex;
  align-items: flex-end;
}

.product-filter__select {
  @include main-title;
  min-width: 100px;
  margin-right: 20px;
  font-size: 16px;
  background-color: $color-default-white;
  border: none;
  border-bottom: 2px solid $color-default-black;
  text-transform: capitalize;
  text-align: center;
  outline: none;
  transition: 0.4s;

  & > option {
    background-color: $color-default-white;
  }

  &:active,
  &:focus {
    border-color: $color-orange;
  }
}

.product-filter__item {
  position: relative;

  .product-filter__label {
    @include main-title;
    position: absolute;
    top: 0;
    left: 20px;
    font-size: 16px;
    cursor: auto;
    transition: 0.4s;

    &-active {
      top: -25px;
    }
  }

  .product-filter__input {
    @include main-title;
    margin-right: 20px;
    padding-left: 20px;
    font-size: 16px;
    // width: 100%;
    // height: 30px;
    border: none;
    border-bottom: 2px solid $color-default-black;
    background-color: $color-default-white;
    text-transform: none;
    transition: 0.4s;

    &-active {
      border-color: $color-orange;
    }

    &:active,
    &:focus {
      outline: none;
      // border-bottom: 1px solid $color-light-black;
    }
  }
}
</style>
