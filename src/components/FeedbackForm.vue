<template>
  <form class="feedback-form" action="">
    <div class="feedback-form__item">
      <label class="feedback-form__label" for="feedbackEmail">Email</label>
      <input id="feedbackEmail" type="email" />
    </div>
    <div class="feedback-form__wrapper">
      <div class="feedback-form__item">
        <label class="feedback-form__label" for="feedbackName">First name</label>
        <input id="feedbackName" type="text" />
      </div>
      <div class="feedback-form__item">
        <label class="feedback-form__label" for="feedbackSurname">Last name</label>
        <input id="feedbackSurname" type="text" />
      </div>
    </div>
    <p class="feedback-form__agreement">
      By signing up to The SHOP PROJECT you accept that The SHOP PROJECT as well as The SHOP PROJECT
      branded shops can contact you and send you communication by email.
    </p>
    <MainButton>Subscribe</MainButton>
  </form>
</template>

<script>
import MainButton from './MainButton.vue';

export default {
  components: {
    MainButton,
  },
};
</script>

<style lang="scss">
.feedback-form {
  width: 100%;
}

.feedback-form__item {
  position: relative;

  .feedback-form__label {
    position: absolute;
    top: 0;
    left: 0;
    cursor: auto;
  }

  input {
    width: 100%;
    height: 30px;
    margin-bottom: 25px;
    border: none;
    border-bottom: 1px solid $color-gray;

    &:active,
    &:focus {
      outline: none;
      border-bottom: 1px solid $color-light-black;
    }
  }
}

.feedback-form__wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.feedback-form__agreement {
  margin-bottom: 30px;
}
</style>
