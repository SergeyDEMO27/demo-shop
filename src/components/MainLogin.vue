<template>
  <div class="main-login">
    <div v-if="!success.login && !success.registration">
      <div class="main-login__container" v-if="isLogin">
        <h2 class="main-login__title">Login</h2>
        <form @submit.prevent="" class="main-login__form" action="">
          <MainInput
            @addInput="(event) => (inputValues.logName = event.target.value)"
            @inputActive="isInputsActive.logName = true"
            @inputNotActive="isInputsActive.logName = false"
            :inputType="'text'"
            :label="'Name'"
            :inputValue="inputValues.logName"
            :isInputActive="isInputsActive.logName"
          />
          <MainInput
            @addInput="(event) => (inputValues.logPassword = event.target.value)"
            @inputActive="isInputsActive.logPassword = true"
            @inputNotActive="isInputsActive.logPassword = false"
            :inputType="'password'"
            :label="'Password'"
            :inputValue="inputValues.logPassword"
            :isInputActive="isInputsActive.logPassword"
          />
          <MainButton class="main-login__button" @click="loginHandler">Log in</MainButton>
        </form>
        <MainButton @click.prevent="isLogin = false">To registration</MainButton>
      </div>
      <div class="main-login__container" v-else>
        <h2 class="main-login__title">Registration</h2>
        <form @submit.prevent="" class="main-login__form" action="">
          <MainInput
            @addInput="(event) => (inputValues.regName = event.target.value)"
            @inputActive="isInputsActive.regName = true"
            @inputNotActive="isInputsActive.regName = false"
            :inputType="'text'"
            :label="'Registrate name'"
            :inputValue="inputValues.regName"
            :isInputActive="isInputsActive.regName"
          />
          <MainInput
            @addInput="(event) => (inputValues.regEmail = event.target.value)"
            @inputActive="isInputsActive.regEmail = true"
            @inputNotActive="isInputsActive.regEmail = false"
            :inputType="'email'"
            :label="'Registrate email'"
            :inputValue="inputValues.regEmail"
            :isInputActive="isInputsActive.regEmail"
          />
          <MainButton class="main-login__button" @click="registrateHandler">Register</MainButton>
        </form>
        <MainButton @click.prevent="isLogin = true">To login</MainButton>
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
import MainInput from '@/components/MainInput.vue';
import MainButton from '@/components/MainButton.vue';

export default {
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
        regEmail: '',
      },
      isInputsActive: {
        logName: false,
        logPassword: false,
        regName: false,
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
      }, 3000);
    },
    registrateHandler() {
      this.inputValues.regName = '';
      this.inputValues.regEmail = '';
      this.success.registration = true;
      // eslint-disable-next-line no-return-assign
      setTimeout(() => {
        this.success.registration = false;
        this.isLogin = true;
      }, 3000);
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

.main-login__container {
  text-align: center;
}

.main-login__title {
  @include main-title;
  margin-bottom: 35px;
  font-size: 34px;
  text-align: center;
}

.main-login__form {
  display: flex;
  flex-direction: column;
}

.main-login__button {
  margin-bottom: 20px;
}

.main-login__success {
  text-align: center;

  &-title {
    @include main-title;
    font-size: 24px;
  }
}
</style>
