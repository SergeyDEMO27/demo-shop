<template>
  <div class="product-slider">
    <div class="product-slider__picture">
      <img class="product-slider__image" src="@/images/background/main-bg-0.jpeg" alt="" />
    </div>
    <div class="product-slider__controls">
      <button type="button">Left</button>
      <button type="button">Right</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.product-slider {
  // width: 50%;
  // padding: 40px 50px;
}

.product-slider__picture {
  width: 100%;

  .product-slider__image {
    width: 100%;
    border-radius: 4px;
  }
}

.product-slider__controls {
  display: flex;
  justify-content: space-between;
}
</style>
