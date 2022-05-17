<template>
  <section class="main-footer">
    <div class="main-footer__container">
      <div class="main-footer__wrapper">
        <p class="main-footer__copyright">© Made by Sergey Lutsenko 2022</p>
        <ul class="main-footer__social">
          <li class="main-footer__item"><a class="main-footer__link" href="#">telegram</a></li>
          <li class="main-footer__item"><a class="main-footer__link" href="#">github</a></li>
          <li class="main-footer__item"><a class="main-footer__link" href="#">email</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.main-footer {
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: $color-light-black;
  border-top: 1px solid $color-orange;
}

.main-footer__container {
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}

.main-footer__copyright {
  font-family: 'Lexend Deca', Arial, Helvetica, sans-serif;
  font-weight: normal;
  color: $color-yellow;
}

.main-footer__wrapper {
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-left: auto;
}

.main-footer__social {
  @include reset-list;
  display: flex;
  justify-content: space-between;
  width: 30%;

  .main-footer__link {
    font-family: 'Supreme', Arial, Helvetica, sans-serif;
    color: $color-orange;
    text-decoration: none;
  }
}
</style>
