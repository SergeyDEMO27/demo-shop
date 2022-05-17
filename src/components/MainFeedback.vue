<template>
  <section class="main-feedback">
    <div class="main-feedback__container">
      <div class="main-feedback__item">
        <img class="main-feedback__image" src="../images/background/main-bg-3.jpeg" alt="" />
      </div>
      <div class="main-feedback__item">
        <div class="main-feedback__wrapper">
          <h3 class="main-feedback__main-title">THE SHOP PROJECT</h3>
          <h2 class="main-feedback__title">Join our global community for exclusive benefits.</h2>
          <ul class="main-feedback__list">
            <li>New & limited products</li>
            <li>Exclusive events</li>
            <li>Personalised content</li>
            <li>Special offers</li>
            <li>Behind the scenes</li>
          </ul>
          <FeedbackForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FeedbackForm from './FeedbackForm.vue';

export default {
  components: {
    FeedbackForm,
  },
};
</script>

<style lang="scss">
.main-feedback {
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: $color-light-black;
  min-height: 700px;
}

.main-feedback__container {
  display: flex;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
}

.main-feedback__item {
  width: 50%;
  min-height: 720px;
  background-color: $color-default-white;
}

.main-feedback__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.main-feedback__wrapper {
  width: 60%;
  margin-right: auto;
  margin-left: auto;
  padding-top: 40px;
  padding-bottom: 40px;
}

.main-feedback__main-title {
  @include main-title;
  margin-bottom: 20px;
  font-size: 20px;
}

.main-feedback__title {
  font-family: 'Lexend Deca', Arial, Helvetica, sans-serif;
  font-weight: normal;
  margin-bottom: 40px;
}

.main-feedback__list {
  @include reset-list;
  margin-bottom: 50px;
  padding-left: 25px;

  li {
    position: relative;
    font-family: 'Lexend Deca', Arial, Helvetica, sans-serif;
    font-weight: normal;
    letter-spacing: 0.03em;
    margin-bottom: 20px;

    &::before {
      position: absolute;
      top: 0;
      left: -25px;
      content: '\2713';
    }
  }
}
</style>
