<template>
  <ul class="category-previews">
    <li class="category-previews__item" v-for="(preview, index) in previews" :key="index">
      <router-link class="category-previews__link" :to="`/products/${preview.link}`">
        <h3 class="category-previews__title">{{ preview.title }}</h3>
        <img
          class="category-previews__image"
          :src="require(`@/images/background/preview-bg-${preview.path}.jpeg`)"
          :alt="preview.title"
        />
      </router-link>
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
.category-previews {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
}

.category-previews__item {
  width: 300px;
  height: 300px;
  background-color: $color-default-black;
  border-radius: 4px;
  overflow: hidden;
}

.category-previews__link {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-color: $color-default-black;
    opacity: 15%;
  }

  .category-previews__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 4px;
    transition: transform 0.4s;
  }

  &:hover {
    .category-previews__image {
      transform: scale(1.1);
    }
  }
}

.category-previews__title {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0);
  color: $color-yellow;
  font-family: 'Supreme', Arial, Helvetica, sans-serif;
  font-size: 26px;
  letter-spacing: 0.07rem;
  text-transform: capitalize;
  z-index: 10;
}

@media (min-width: $viewport--md) and (max-width: $viewport--lg) {
  .category-previews__item {
    width: 200px;
    height: 200px;
  }
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .category-previews {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .category-previews__item {
    width: 200px;
    height: 200px;
    margin-bottom: 30px;
  }
}
</style>
