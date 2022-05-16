<template>
  <ul class="product-preview">
    <li class="product-preview__item" v-for="preview in previews" :key="preview.id">
      <a class="product-preview__link" href="#">
        <h3 class="product-preview__title">{{ preview.title }}</h3>
        <div class="product-preview__picture">
          <img
            class="product-preview__image"
            :src="require(`@/images/background/main-bg-${preview.path}.jpeg`)"
            alt=""
          />
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    previews: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.product-preview {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
}

.product-preview__item {
  width: 200px;
  height: 400px;
  background-color: $color-default-black;
  border-radius: 4px;
  // overflow: hidden;
}

.product-preview__link {
  position: relative;
  width: 100%;
  height: 100%;

  .product-preview__picture {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .product-preview__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 4px;
    transition: transform 0.4s;
  }

  &:hover {
    .product-preview__image {
      transform: scale(1.1);
    }

    .product-preview__title::after {
      width: 100%;
    }
  }
}

.product-preview__title {
  position: absolute;
  // position: relative;
  bottom: -50px;
  color: #191817;
  font-family: 'Supreme', Arial, Helvetica, sans-serif;
  font-size: 26px;
  font-weight: normal;
  letter-spacing: 0.07rem;
  text-transform: capitalize;
  z-index: 100;

  &::after {
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 0;
    height: 3px;
    content: '';
    border-radius: 25px;
    background-color: #ff8c00;
    transition: 0.4s ease-in-out;
  }
}
</style>
