<template>
  <div class="main-button">
    <a class="main-button__link" href="#">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.main-button__link {
  display: inline-block;
  min-width: 140px;
  padding: 10px 32px;
  font-family: 'Lexend Deca', Arial, Helvetica, sans-serif;
  color: $color-black;
  text-transform: capitalize;
  text-align: center;
  border: 2px solid $color-black;
  border-radius: 24px;
  background-color: transparent;
  text-decoration: none;
  overflow: hidden;
  transition: 0.4s;

  &:hover {
    background-color: $color-orange;
    border-color: $color-orange;
  }
}
</style>
