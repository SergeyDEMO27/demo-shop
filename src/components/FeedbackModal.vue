<template>
  <div class="feedback-modal">
    <div class="feedback-modal__item">
      <img class="feedback-modal__image" src="@/assets/images/background/feedback-bg.jpeg" alt="" />
    </div>
    <div class="feedback-modal__item">
      <div class="feedback-modal__wrapper">
        <h3 class="feedback-modal__main-title">The Demo Shop</h3>
        <h2 class="feedback-modal__title">Join our global community for exclusive benefits.</h2>
        <ul class="feedback-modal__list">
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
</template>

<script>
import FeedbackForm from '@/components/FeedbackForm.vue';

export default {
  components: {
    FeedbackForm,
  },
};
</script>

<style lang="scss">
.feedback-modal {
  display: flex;
  width: 100%;
  max-height: 770px;
}

.feedback-modal__item {
  width: 50%;
  // min-height: 720px;
  background-color: $color-default-white;
}

.feedback-modal__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.feedback-modal__wrapper {
  width: 60%;
  margin-right: auto;
  margin-left: auto;
  padding-top: 40px;
  padding-bottom: 40px;
}

.feedback-modal__main-title {
  @include main-title;
  margin-bottom: 20px;
  font-size: 20px;
  text-transform: uppercase;
}

.feedback-modal__title {
  font-family: 'Lexend Deca', Arial, Helvetica, sans-serif;
  font-weight: normal;
  margin-bottom: 40px;
}

.feedback-modal__list {
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

@media (min-width: $viewport--md) and (max-width: $viewport--lg) {
  .feedback-modal {
    max-height: unset;
  }
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .feedback-modal {
    max-height: unset;
  }

  .feedback-modal__wrapper {
    width: 90%;
  }

  .feedback-modal__main-title {
    font-size: 18px;
  }

  .feedback-modal__title {
    font-size: 16px;
  }

  .feedback-modal__list {
    li {
      font-size: 16px;
    }
  }
}
</style>
