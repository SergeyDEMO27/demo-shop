<template>
  <nav class="mainNavigation">
    <ul class="mainNavigation__list">
      <li class="mainNavigation__item" v-for="(navItem, index) in navItems" :key="index">
        <router-link
          :to="`/products/${navItem}`"
          class="mainNavigation__link"
          href="#"
          :id="`${index}`"
        >
          {{ navItem }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainNavigation',
  props: {
    navItems: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.mainNavigation__list {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 16px 16px 16px 0;
  list-style: none;
}

.mainNavigation__item {
  margin: 5px 20px;
  text-align: center;

  .mainNavigation__link {
    @include main-description;
    @include default-transition;
    position: relative;
    font-size: 16px;
    color: $color-default-white;
    letter-spacing: 0.07rem;
    text-transform: uppercase;
    text-decoration: none;
    outline: none;

    &::after {
      @include default-transition;
      position: absolute;
      bottom: -5px;
      left: 0;
      content: '';
      width: 0;
      height: 2px;
      background-color: $color-default-white;
    }

    &:hover,
    &:focus {
      &::after {
        width: 100%;
        background-color: $color-orange;
      }
    }
  }
}

@media (min-width: $viewport--md) and (max-width: $viewport--lg) {
  .mainNavigation__item {
    margin: 5px 7px;

    .mainNavigation__link {
      letter-spacing: 0.01px;
    }
  }
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .mainNavigation__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .mainNavigation__item {
    margin: 5px 7px;

    .mainNavigation__link {
      font-size: 14px;
      letter-spacing: 0.01px;
    }
  }
}
</style>
