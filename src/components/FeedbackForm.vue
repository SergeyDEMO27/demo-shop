<template>
  <form class="feedback-form" @submit.prevent="submitHandler" action="">
    <div class="feedback-form__item">
      <MainInput
        @inputActive="isInputsActive.email = true"
        @inputNotActive="isInputsActive.email = false"
        :inputType="'email'"
        :label="'Email'"
        :isInputActive="isInputsActive.email"
        :isFocus="true"
        v-model="inputValues.email"
      />
    </div>
    <div class="feedback-form__wrapper">
      <div class="feedback-form__item">
        <MainInput
          @inputActive="isInputsActive.firstName = true"
          @inputNotActive="isInputsActive.firstName = false"
          :inputType="'text'"
          :label="'First name'"
          :isInputActive="isInputsActive.firstName"
          v-model="inputValues.firstName"
        />
      </div>
      <div class="feedback-form__item">
        <MainInput
          @inputActive="isInputsActive.lastName = true"
          @inputNotActive="isInputsActive.lastName = false"
          :inputType="'text'"
          :label="'Last name'"
          :isInputActive="isInputsActive.lastName"
          v-model="inputValues.lastName"
        />
      </div>
    </div>
    <p class="feedback-form__agreement">
      By subscribing to The Demo Shop you accept that we can contact you and send you communication
      by email.
    </p>
    <MainButton class="feedback-form__button" @click.prevent="submitHandler" :buttonType="'button'"
      >Subscribe</MainButton
    >
  </form>
</template>

<script>
import MainInput from '@/components/UI/MainInput.vue';
import MainButton from '@/components/UI/MainButton.vue';

export default {
  name: 'FeedbackForm',
  components: {
    MainButton,
    MainInput,
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
}

.feedback-form__wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;

  .feedback-form__item {
    width: 45%;
  }
}

.feedback-form__agreement {
  @include main-description;
  margin-bottom: 30px;
  font-size: 16px;
  opacity: 75%;
}

.feedback-form__button {
  &:focus {
    background-color: $color-orange;
    border-color: $color-orange;
    outline: none;
  }
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .feedback-form__wrapper {
    flex-direction: column;

    .feedback-form__item {
      width: 100%;
    }
  }

  .feedback-form__agreement {
    font-size: 14px;
  }

  .feedback-form__button {
    .main-button__item {
      min-width: unset;
      padding: 10px 20px;
    }
  }
}
</style>
