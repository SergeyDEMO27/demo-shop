<template>
  <section class="main-footer">
    <div class="main-footer__container">
      <div class="main-footer__wrapper">
        <p class="main-footer__copyright">© Made by Sergey Lutsenko 2022</p>
        <ul class="main-footer__social">
          <li class="main-footer__item">
            <a class="main-footer__link" aria-label="telegram" href="https://t.me/barialibasov">
              <svg class="main-footer__icon" width="27" height="27" viewBox="0 0 60 60">
                <use :href="`${sprite}#icon-telegram`"></use>
              </svg>
              <span>telegram</span></a
            >
          </li>
          <li class="main-footer__item">
            <a class="main-footer__link" aria-label="github" href="https://github.com/edji777">
              <svg class="main-footer__icon" width="25" height="25" viewBox="0 0 20 20">
                <use :href="`${sprite}#icon-github`"></use>
              </svg>
              <span>github</span></a
            >
          </li>
          <li class="main-footer__item">
            <a class="main-footer__link" aria-label="email" href="mailto: demo27@vk.com">
              <svg class="main-footer__icon" width="25" height="25" viewBox="0 0 474 474">
                <use :href="`${sprite}#icon-mail`"></use>
              </svg>
              <span>email</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import sprite from '@/images/sprite/sprite.svg';

export default {
  components: {
    // SvgSprite,
  },
  setup() {
    return {
      sprite,
    };
  },
};
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
  width: 25%;

  .main-footer__link {
    font-family: 'Supreme', Arial, Helvetica, sans-serif;
    color: $color-orange;
    text-decoration: none;

    .main-footer__icon {
      fill: $color-orange;
    }

    span {
      @include visually-hidden;
    }

    &:hover {
      .main-footer__icon {
        opacity: 80%;
      }
    }
  }
}
</style>
