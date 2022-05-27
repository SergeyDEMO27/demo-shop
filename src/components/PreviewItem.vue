<template>
  <div class="preview-item" :class="[horisonal ? 'preview-item--horisontal' : '']">
    <router-link :to="`/product/${preview[0].id}`" class="preview-item__link">
      <div class="preview-item__picture">
        <img class="preview-item__image" :src="preview[0].image" alt="" />
      </div>
    </router-link>
    <div class="preview-item__info">
      <h3 class="preview-item__title">{{ preview[0].title }}</h3>
      <p class="preview-item__description">{{ preview[0].description }}</p>
      <MainButton @click="$router.push(`/product/${preview[0].id}`)">show more</MainButton>
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
      type: Boolean,
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

    .preview-item__picture {
      width: 100%;
      height: 100%;
      min-height: 360px;
    }

    .preview-item__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 50px;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      background-color: rgb(245, 244, 243);
      text-align: center;
    }
  }
}

.preview-item__link {
  width: 100%;
  // max-height: 360px;
}

.preview-item__picture {
  position: relative;
  width: 100%;
  // height: 100%;
  height: 360px;
  margin-bottom: 20px;
  border-radius: 4px;
  overflow: hidden;
  // background-color: lightpink;

  .preview-item__image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    object-fit: contain;
    object-position: bottom;
    border-radius: 4px;
    transition: 0.4s;
  }

  &:hover {
    .preview-item__image {
      width: 100%;
      height: 100%;
    }
  }
}

.preview-item__info {
  text-align: center;
}

.preview-item__title {
  margin-bottom: 30px;
  font-family: 'Lexend Deca', Arial, Helvetica, sans-serif;
  font-size: 28px;
  font-weight: normal;
  text-transform: lowercase;

  &::first-letter {
    text-transform: uppercase;
  }
}

.preview-item__description {
  margin-bottom: 30px;
  font-family: 'Supreme', Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: rgba(0, 0, 0, 80%);
}
</style>
