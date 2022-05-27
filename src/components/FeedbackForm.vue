<template>
  <form class="feedback-form" @submit.prevent="submitHandler" action="">
    <div class="feedback-form__item">
      <label
        class="feedback-form__label"
        :class="{
          'feedback-form__label-active': inputValues.email || isInputsActive.email,
        }"
        for="feedbackEmail"
        >Email</label
      >
      <input
        @input="inputValues.email = $event.target.value"
        @focus="isInputsActive.email = true"
        @blur="isInputsActive.email = false"
        :value="inputValues.email"
        id="feedbackEmail"
        type="email"
        required
      />
    </div>
    <div class="feedback-form__wrapper">
      <div class="feedback-form__item">
        <label
          class="feedback-form__label"
          :class="{
            'feedback-form__label-active': inputValues.firstName || isInputsActive.firstName,
          }"
          for="feedbackName"
          >First name</label
        >
        <input
          @input="inputValues.firstName = $event.target.value"
          @focus="isInputsActive.firstName = true"
          @blur="isInputsActive.firstName = false"
          :value="inputValues.firstName"
          id="feedbackName"
          type="text"
          require
        />
      </div>
      <div class="feedback-form__item">
        <label
          class="feedback-form__label"
          :class="{
            'feedback-form__label-active': inputValues.lastName || isInputsActive.lastName,
          }"
          for="feedbackSurname"
          >Last name</label
        >
        <input
          @input="inputValues.lastName = $event.target.value"
          @focus="isInputsActive.lastName = true"
          @blur="isInputsActive.lastName = false"
          :value="inputValues.lastName"
          id="feedbackSurname"
          type="text"
          required
        />
      </div>
    </div>
    <p class="feedback-form__agreement">
      By signing up to The SHOP PROJECT you accept that The SHOP PROJECT as well as The SHOP PROJECT
      branded shops can contact you and send you communication by email.
    </p>
    <MainButton @click.prevent="submitHandler">Subscribe</MainButton>
  </form>
</template>

<script>
import MainButton from './MainButton.vue';

export default {
  components: {
    MainButton,
  },
  data() {
    return {
      inputValues: {
        email: '',
        firstName: '',
        lastName: '',
      },
      isInputsActive: {
        email: false,
        firstName: false,
        lastName: false,
      },
    };
  },

  methods: {
    submitHandler() {
      this.inputValues.email = '';
      this.inputValues.firstName = '';
      this.inputValues.lastName = '';
    },
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
    transition: 0.4s;

    &-active {
      top: -25px;
    }
  }

  input {
    width: 100%;
    height: 30px;
    margin-bottom: 40px;
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
