<template>
  <form @submit.prevent class="product-filter">
    <select
      class="product-filter__select"
      name=""
      id=""
      @change="(event) => $emit('update:select', event.target.value)"
      :value="select"
    >
      <option value="" disabled selected>Filter by</option>
      <option v-for="option in selectOptions" :key="option.title" :value="option.value">
        {{ option.title }}
      </option>
    </select>
    <div class="product-filter__item">
      <label
        class="product-filter__label"
        :class="{ 'product-filter__label-active': search || isInputActive }"
        for="searchProduct"
        >Search</label
      >
      <input
        class="product-filter__input"
        :class="{ 'product-filter__input-active': search || isInputActive }"
        @input="(event) => $emit('update:search', event.target.value)"
        @focus="isInputActive = true"
        @blur="isInputActive = false"
        id="searchProduct"
        type="search"
        :value="search"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: 'ProductFilter',
  props: {
    select: String,
    search: [String, Number],
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
  @include default-transition;
  min-width: 100px;
  margin-right: 20px;
  font-size: 16px;
  background-color: $color-default-white;
  border: none;
  border-bottom: 2px solid $color-default-black;
  text-transform: capitalize;
  text-align: left;
  outline: none;

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

  .product-filter__input {
    @include main-title;
    @include default-transition;
    margin-right: 20px;
    font-size: 16px;
    border: none;
    border-bottom: 2px solid $color-default-black;
    background-color: $color-default-white;
    text-transform: none;

    &-active {
      border-color: $color-orange;
    }

    &:active,
    &:focus {
      outline: none;
    }
  }
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .product-filter__select {
    width: 30%;
    font-size: 14px;
  }

  .product-filter__item {
    .product-filter__label {
      font-size: 14px;
    }

    .product-filter__input {
      width: 90%;
      font-size: 14px;
    }
  }
}
</style>
