<template>
  <div class="product-slider">
    <div class="product-slider__picture">
      <transition-group :name="slideDirection === 'right' ? 'slide-fade-right' : 'slide-fade-left'">
        <img
          class="product-slider__image"
          :src="require(`@/images/background/main-bg-${activeImage}.jpeg`)"
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
      slideDirection: 'right',
    };
  },
  methods: {
    prevSlideHandler() {
      this.activeSlide = this.activeSlide - 1 < 0 ? this.slideCount - 1 : this.activeSlide - 1;
      this.slideDirection = 'left';
    },
    nextSlideHandler() {
      this.activeSlide = this.activeSlide + 1 > this.slideCount - 1 ? 0 : this.activeSlide + 1;
      this.slideDirection = 'right';
    },
    slidePressHandler(index) {
      this.slideDirection = index > this.activeSlide ? 'right' : 'left';
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
  // width: 50%;
  // padding: 40px 50px;
}

.product-slider__picture {
  // width: 100%;
  width: 576px;
  height: 315px;
  margin-bottom: 20px;

  .product-slider__image {
    width: 576px;
    height: 315px;
    object-fit: cover;
    object-position: center;
    border-radius: 4px;
  }
}

.product-slider__controls {
  display: flex;
  justify-content: space-between;
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
    cursor: pointer;

    &:hover {
      &::before {
        background-color: rgba(0, 0, 0, 80%);
      }
    }

    &::before {
      position: absolute;
      top: 50%;
      left: 0;
      width: 2px;
      height: 8px;
      content: '';
      background-color: rgba(0, 0, 0, 30%);
      transition: 0.4s;
    }

    &-active {
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
  cursor: pointer;

  &:hover {
    &::after {
      border-color: rgba(0, 0, 0, 80%);
    }
  }

  &::after {
    position: absolute;
    top: 25%;
    left: 35%;
    width: 15px;
    height: 15px;
    content: '';
    border-left: 2px solid rgba(0, 0, 0, 50%);
    border-top: 2px solid rgba(0, 0, 0, 50%);
    transition: 0.4s;
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
    transition: all 0.4s ease-out;
  }

  &-leave-active {
    position: absolute;
    transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
  }

  &-enter-from,
  &-leave-to {
    transform: translateX(20px);
    opacity: 0.8;
  }
}

.slide-fade-right {
  &-enter-active {
    position: absolute;
    transition: all 0.4s ease-out;
  }

  &-leave-active {
    position: absolute;
    transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
  }

  &-enter-from,
  &-leave-to {
    transform: translateX(-20px);
    opacity: 0.8;
  }
}
</style>
