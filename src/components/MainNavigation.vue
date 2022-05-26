<template>
  <nav class="mainNavigation">
    <ul class="mainNavigation__list">
      <li class="mainNavigation__item" v-for="(navItem, index) in navItems" :key="index">
        <router-link
          :to="`/products/${navItem}`"
          class="mainNavigation__link"
          href="#"
          :id="`${index}`"
          @mouseover="changePreviewId"
          @focus="changePreviewId"
        >
          {{ navItem }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    navItems: {
      type: Array,
      required: true,
    },
  },
  methods: {
    changePreviewId(e) {
      this.$emit('create', e.target.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.mainNavigation__list {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 16px 16px 16px 0;
  list-style: none;
}

.mainNavigation__item {
  margin: 5px 20px;

  .mainNavigation__link {
    position: relative;
    font-family: 'Supreme', Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: $color-default-white;
    letter-spacing: 0.07rem;
    text-transform: uppercase;
    text-decoration: none;
    transition: 0.5s ease-in-out;

    &::after {
      position: absolute;
      bottom: -10px;
      left: 0;
      content: '';
      width: 0;
      height: 2px;
      background-color: $color-default-white;
      transition: 0.4s ease-in-out;
    }

    &:hover {
      color: $color-default-black;

      &::after {
        width: 100%;
        background-color: $color-default-black;
      }
    }
  }
}
</style>
