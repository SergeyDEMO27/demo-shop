<template>
  <div class="preview-item" :class="[horisonal ? 'preview-item--horisontal' : '']">
    <router-link
      @mouseover="this.isHover = true"
      @mouseout="this.isHover = false"
      @focus="this.isHover = true"
      @blur="this.isHover = false"
      :to="`/product/${preview.id}`"
      class="preview-item__link"
      :class="{ 'preview-item__link-active': this.isHover }"
    >
      <div class="preview-item__picture">
        <img class="preview-item__image" :src="preview.image" alt="" />
      </div>
    </router-link>
    <div class="preview-item__info">
      <h3 class="preview-item__title" :class="{ 'preview-item__title-active': this.isHover }">
        {{ preview.title }}
      </h3>
      <p class="preview-item__description">{{ preview.description }}</p>
      <MainButton
        :class="{ 'preview-item__button-active': this.isHover }"
        @mouseover="this.isHover = true"
        @mouseout="this.isHover = false"
        @focus="this.isHover = true"
        @blur="this.isHover = false"
        @click="$router.push(`/product/${preview.id}`)"
        >show more</MainButton
      >
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
      type: Object,
      required: true,
    },
    horisonal: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      isHover: false,
    };
  },
};
</script>

<style lang="scss">
.preview-item {
  width: 100%;
  box-shadow: -4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border-radius: 15px;

  &--horisontal {
    display: flex;

    .preview-item__link,
    .preview-item__info {
      width: 50%;
    }

    .preview-item__info {
      border-radius: 0px;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
    }

    .preview-item__picture {
      width: 100%;
      height: 100%;
      min-height: 360px;
      border-radius: 0;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
    }
  }
}

.preview-item__link {
  width: 100%;

  &-active {
    .preview-item__picture {
      .preview-item__image {
        width: 90%;
        height: 90%;
      }
    }
  }
}

.preview-item__picture {
  position: relative;
  width: 100%;
  // height: 100%;
  height: 360px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  overflow: hidden;
  background-color: $color-default-white;

  .preview-item__image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    object-fit: contain;
    object-position: bottom;
    border-radius: 4px;
    transition: 0.4s;
  }

  &:hover {
    .preview-item__image {
      width: 90%;
      height: 90%;
    }
  }
}

.preview-item__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 50px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: $color-default-white;
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

  &-active {
    &::first-letter {
      color: $color-orange;
    }
  }
}

.preview-item__description {
  margin-bottom: 30px;
  font-family: 'Supreme', Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: rgba(0, 0, 0, 80%);
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  // color: #e5e5e5;
  display: -webkit-box;
  height: 3.9em;
  line-height: 1.3em;
  // max-width: 40%;
  overflow: hidden;
}

.preview-item__button-active {
  a {
    background-color: $color-orange;
    border-color: $color-orange;
  }
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .preview-item {
    width: 100%;

    &--horisontal {
      display: block;

      .preview-item__link,
      .preview-item__info {
        width: 100%;
      }

      .preview-item__info {
        border-radius: 0px;
        border-bottom-right-radius: 15px;
        border-bottom-left-radius: 15px;
      }

      .preview-item__picture {
        width: 100%;
        height: 100%;
        min-height: 360px;
        border-radius: 0;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
      }
    }
  }

  .preview-item__title {
    font-size: 20px;
  }

  .preview-item__description {
    font-size: 16px;
  }
}
</style>
