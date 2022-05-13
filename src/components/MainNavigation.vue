<template>
  <nav class="mainNavigation">
    <ul class="mainNavigation__list">
      <li class="mainNavigation__item">
        <a class="mainNavigation__link" href="#">electronics</a>
      </li>
      <li class="mainNavigation__item">
        <a class="mainNavigation__link" href="#">jewelry</a>
      </li>
      <li class="mainNavigation__item">
        <a class="mainNavigation__link" href="#">men's clothing</a>
      </li>
      <li class="mainNavigation__item">
        <a class="mainNavigation__link" href="#">women's clothing</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
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
      transition: 0.5s ease-in-out;
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
