<template>
  <div class="main-login">
    <div v-if="!success.login && !success.registration">
      <div class="main-login__container" v-if="isLogin">
        <h2 class="main-login__title">Login</h2>
        <form @submit.prevent="" class="main-login__form" action="">
          <MainInput
            @inputActive="isInputsActive.logName = true"
            @inputNotActive="isInputsActive.logName = false"
            :inputType="'text'"
            :label="'name'"
            :isInputActive="isInputsActive.logName"
            :isFocus="true"
            v-model="inputValues.logName"
          />
          <MainInput
            @inputActive="isInputsActive.logPassword = true"
            @inputNotActive="isInputsActive.logPassword = false"
            :inputType="'password'"
            :label="'password'"
            :isInputActive="isInputsActive.logPassword"
            v-model="inputValues.logPassword"
          />
          <MainButton class="main-login__button" @click="loginHandler" :buttonType="'button'"
            >Submit</MainButton
          >
        </form>
        <MainButton
          class="main-login__button"
          @click.prevent="isLogin = false"
          :buttonType="'button'"
          >registration</MainButton
        >
      </div>
      <div class="main-login__container" v-else>
        <h2 class="main-login__title">Registration</h2>
        <form @submit.prevent="" class="main-login__form" action="">
          <MainInput
            @inputActive="isInputsActive.regName = true"
            @inputNotActive="isInputsActive.regName = false"
            :inputType="'text'"
            :label="'name'"
            :isInputActive="isInputsActive.regName"
            :isFocus="true"
            v-model="inputValues.regName"
          />
          <MainInput
            @inputActive="isInputsActive.regPassword = true"
            @inputNotActive="isInputsActive.regPassword = false"
            :inputType="'password'"
            :label="'password'"
            :isInputActive="isInputsActive.regPassword"
            v-model="inputValues.regPassword"
          />
          <MainInput
            @inputActive="isInputsActive.regEmail = true"
            @inputNotActive="isInputsActive.regEmail = false"
            :inputType="'email'"
            :label="'email'"
            :isInputActive="isInputsActive.regEmail"
            v-model="inputValues.regEmail"
          />
          <MainButton class="main-login__button" @click="registrateHandler" :buttonType="'button'"
            >Submit</MainButton
          >
        </form>
        <MainButton
          class="main-login__button"
          @click.prevent="isLogin = true"
          :buttonType="'button'"
          >login</MainButton
        >
      </div>
    </div>
    <div class="main-login__success" v-else-if="success.login">
      <p class="main-login__success-title">Thanks for Login</p>
    </div>
    <div class="main-login__success" v-else-if="success.registration">
      <p class="main-login__success-title">Thanks for Registration</p>
    </div>
  </div>
</template>

<script>
import MainInput from '@/components/UI/MainInput.vue';
import MainButton from '@/components/UI/MainButton.vue';

export default {
  name: 'MainLogin',
  components: {
    MainInput,
    MainButton,
  },
  data() {
    return {
      isLogin: true,
      inputValues: {
        logName: '',
        logPassword: '',
        regName: '',
        regPassword: '',
        regEmail: '',
      },
      isInputsActive: {
        logName: false,
        logPassword: false,
        regName: false,
        regPassword: false,
        regEmail: false,
      },
      success: {
        login: false,
        registration: false,
      },
    };
  },

  methods: {
    submitHandler() {
      this.inputValues.logName = '';
      this.inputValues.logPassword = '';
      this.inputValues.regName = '';
      this.inputValues.regEmail = '';
    },
    loginHandler() {
      this.inputValues.logName = '';
      this.inputValues.logPassword = '';
      this.success.login = true;
      setTimeout(() => {
        this.success.login = false;
        this.$emit('closeForm');
      }, 2000);
    },
    registrateHandler() {
      this.inputValues.regName = '';
      this.inputValues.regEmail = '';
      this.success.registration = true;
      setTimeout(() => {
        this.success.registration = false;
        this.isLogin = true;
      }, 2000);
    },
  },
};
</script>

<style lang="scss">
.main-login {
  position: relative;
  width: 400px;
  margin: 0 auto;
  padding: 30px 40px;
  background-color: $color-default-white;
  border-radius: 4px;
}

.main-login__title {
  @include main-title;
  margin-bottom: 35px;
  font-size: 34px;
  text-align: center;
}

.main-login__container {
  display: flex;
  flex-direction: column;
}

.main-login__form {
  display: flex;
  flex-direction: column;
}

.main-login__button {
  margin: 0 auto;
  margin-bottom: 20px;
}

.main-login__success {
  text-align: center;

  &-title {
    @include main-title;
    font-size: 24px;
  }
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .main-login {
    padding: 30px 13vw;
    width: 100%;
  }

  .main-login__container {
    width: 100%;
  }

  .main-login__title {
    font-size: 32px;
  }

  .main-login__success {
    &-title {
      @include main-title;
      font-size: 18px;
    }
  }
}
</style>
