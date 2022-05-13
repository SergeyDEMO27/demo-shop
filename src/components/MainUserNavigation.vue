<template>
  <div class="main-user-navigation">
    <ul class="main-user-navigation__list">
      <li class="main-user-navigation__item">
        <a class="main-user-navigation__link" href="#">login</a>
      </li>
      <li class="main-user-navigation__item">
        <a class="main-user-navigation__link" href="#">basket</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-user-navigation__list {
  display: flex;
  margin: 0;
  padding: 0;
  padding-top: 16px;
  list-style: none;
}

.main-user-navigation__item {
  margin: 5px 20px;

  .main-user-navigation__link {
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
