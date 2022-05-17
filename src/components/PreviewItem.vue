<template>
  <div class="preview-item" :class="[horisonal ? 'preview-item--horisontal' : '']">
    <a class="preview-item__link" href="#">
      <div class="preview-item__picture">
        <img
          class="preview-item__image"
          :src="require(`@/images/background/main-bg-${preview[0].path}.jpeg`)"
          alt=""
        />
      </div>
      -
    </a>
    <div class="preview-item__info">
      <h3 class="preview-item__title">{{ preview[0].title }}</h3>
      <p class="preview-item__description">{{ preview[0].title }}</p>
      <MainButton>show more</MainButton>
    </div>
  </div>
</template>

<script>
import MainButton from './MainButton.vue';

export default {
  components: {
    MainButton,
  },
  props: {
    preview: {
      type: Array,
      required: true,
    },
    horisonal: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss">
.preview-item {
  width: 100%;

  &--horisontal {
    display: flex;

    .preview-item__link,
    .preview-item__info {
      width: 50%;
    }

    .preview-item__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: rgb(245, 244, 243);
    }
  }
}

.preview-item__link {
  width: 100%;
  max-height: 360px;

  &:hover ~ .main-button > .main-button__link {
    background-color: $color-orange;
    border-color: $color-orange;
  }
}

.preview-item__picture {
  width: 100%;
  height: 360px;
  border-radius: 4px;
  overflow: hidden;

  .preview-item__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 4px;
    transition: 0.4s;
  }

  &:hover {
    .preview-item__image {
      transform: scale(1.1);
    }
  }
}

.preview-item__title {
  margin-bottom: 30px;
  font-family: 'Lexend Deca', Arial, Helvetica, sans-serif;
  font-size: 38px;
  font-weight: normal;
  text-transform: capitalize;
}

.preview-item__description {
  margin-bottom: 20px;
  font-family: 'Supreme', Arial, Helvetica, sans-serif;
  font-size: 20px;
}
</style>
