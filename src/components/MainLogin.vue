<template>
  <div class="main-login">
    <!-- <div>
      <h2 class="main-login__title">Login</h2>
      <form class="main-login__form" action="">
        <MainInput :inputType="'text'" :label="'Login'" />
        <MainInput :inputType="'password'" :label="'Password'" />
        <MainButton>Log in</MainButton>
      </form>
    </div> -->
    <div>
      <h2 class="main-login__title">Register</h2>
      <form class="main-login__form" action="">
        <MainInput :inputType="'text'" :label="'Login'" />
        <MainInput :inputType="'email'" :label="'Email'" />
        <MainButton>Register</MainButton>
      </form>
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
};
</script>

<style lang="scss">
.main-login {
  max-width: 500px;
  margin: 0 auto;
  padding: 30px 40px;
  background-color: $color-default-white;
  border-radius: 4px;
}

.main-login__title {
  @include main-title;
  margin-bottom: 10px;
  font-size: 34px;
}

.main-login__form {
  display: flex;
  flex-direction: column;
}
</style>
