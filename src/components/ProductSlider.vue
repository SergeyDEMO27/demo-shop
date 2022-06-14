<template>
  <div class="product-slider">
    <div class="product-slider__picture">
      <div class="product-slider__color" :style="{ backgroundColor: `${activeColor}` }"></div>
      <transition-group :name="slideDirection === 'right' ? 'slide-fade-right' : 'slide-fade-left'">
        <img
          class="product-slider__image"
          :style="{ transform: `rotate(${randomDegree}deg)` }"
          :src="product.image"
          alt=""
          :key="`@/images/background/main-bg-${activeImage}.jpeg`"
        />
      </transition-group>
    </div>
    <div class="product-slider__controls">
      <button
        class="product-slider__button product-slider__button-prev"
        type="button"
        @click="prevSlideHandler"
      >
        <span>Left</span>
      </button>
      <ul class="product-slider__selector">
        <li
          class="product-slider__item"
          :class="{ 'product-slider__item-active': activeSlide === index }"
          v-for="(item, index) of slideCount"
          :key="index"
          @click="slidePressHandler(index)"
          @keypress.enter="slidePressHandler(index)"
          tabindex="0"
        ></li>
      </ul>

      <button
        class="product-slider__button product-slider__button-next"
        type="button"
        @click="nextSlideHandler"
      >
        <span>Right</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductSlider',
  props: {
    product: Object,
    activeColor: String,
  },
  data() {
    return {
      images: [
        '0',
        '1',
        '2',
        '3',
        '0',
        '1',
        '2',
        '3',
        '0',
        '1',
        '2',
        '3',
        '0',
        '1',
        '2',
        '3',
        '0',
        '1',
        '2',
        '3',
      ],
      activeSlide: 0,
      randomDegree: 0,
      slideDirection: 'right',
    };
  },
  methods: {
    prevSlideHandler() {
      this.activeSlide = this.activeSlide - 1 < 0 ? this.slideCount - 1 : this.activeSlide - 1;
      this.slideDirection = 'left';
      this.randomDegree = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    },
    nextSlideHandler() {
      this.activeSlide = this.activeSlide + 1 > this.slideCount - 1 ? 0 : this.activeSlide + 1;
      this.slideDirection = 'right';
      this.randomDegree = Math.floor(Math.random() * (360 - 350 + 1)) + 350;
    },
    slidePressHandler(index) {
      this.slideDirection = index > this.activeSlide ? 'right' : 'left';
      // eslint-disable-next-line operator-linebreak
      this.randomDegree =
        this.slideDirection === 'right'
          ? Math.floor(Math.random() * (360 - 350 + 1)) + 350
          : Math.floor(Math.random() * (10 - 0 + 1)) + 0;
      this.activeSlide = index;
    },
  },
  computed: {
    slideCount() {
      return this.images.length;
    },
    activeImage() {
      return this.images[this.activeSlide];
    },
  },
};
</script>

<style lang="scss">
.product-slider {
  overflow: hidden;
}

.product-slider__picture {
  position: relative;
  width: 100%;
  height: 360px;
  margin-bottom: 20px;
  border-radius: 4px;

  .product-slider__color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 10%;
    z-index: 10;
  }

  .product-slider__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: 4px;
  }
}

.product-slider__controls {
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin: 0 auto;
}

.product-slider__selector {
  @include reset-list;
  display: flex;
  justify-content: space-between;
  min-width: 15%;

  .product-slider__item {
    position: relative;
    width: 6px;
    height: 25px;
    padding-bottom: 15px;
    outline: none;
    cursor: pointer;

    &:hover {
      &::before {
        background-color: rgba(0, 0, 0, 80%);
      }
    }

    &:focus {
      &::before {
        background-color: $color-orange;
      }
    }

    &::before {
      @include default-transition;
      position: absolute;
      top: 50%;
      left: 0;
      width: 2px;
      height: 8px;
      content: '';
      background-color: rgba(0, 0, 0, 30%);
    }

    &-active {
      cursor: auto;

      &:hover {
        &::before {
          background-color: rgba(0, 0, 0, 80%);
        }
      }

      &:focus {
        &::before {
          background-color: rgba(0, 0, 0, 80%);
        }
      }

      &::before {
        top: 4px;
        height: 14px;
        background-color: $color-black;
      }
    }
  }
}

.product-slider__button {
  position: relative;
  width: 20px;
  height: 30px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;

  &:hover {
    &::after {
      border-color: rgba(0, 0, 0, 80%);
    }
  }

  &:focus {
    &::after {
      border-color: $color-orange;
    }
  }

  &::after {
    @include default-transition;
    position: absolute;
    top: 25%;
    left: 35%;
    width: 15px;
    height: 15px;
    content: '';
    border-left: 2px solid rgba(0, 0, 0, 50%);
    border-top: 2px solid rgba(0, 0, 0, 50%);
  }

  &-prev {
    &::after {
      transform: rotate(-45deg);
    }
  }

  &-next {
    &::after {
      left: -20%;
      transform: rotate(135deg);
    }
  }

  span {
    @include visually-hidden;
  }
}

.slide-fade-left {
  &-enter-active {
    position: absolute;
    transition: all 0.1s ease-out;
  }

  &-leave-active {
    position: absolute;
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
  }

  &-enter-from,
  &-leave-to {
    transform: translateX(20px);
    opacity: 0.1;
  }
}

.slide-fade-right {
  &-enter-active {
    position: absolute;
    transition: all 0.1s ease-out;
  }

  &-leave-active {
    position: absolute;
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
  }

  &-enter-from,
  &-leave-to {
    transform: translateX(-20px);
    opacity: 0.1;
  }
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .product-slider__controls {
    max-width: 450px;
    width: 90%;
  }
}
</style>
