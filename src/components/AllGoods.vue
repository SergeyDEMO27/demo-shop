<template>
  <TransitionGroup class="all-goods" name="list" tag="ul">
    <li class="all-goods__item" v-for="product in products" :key="product.id">
      <router-link class="all-goods__link" :to="`/product/${product.id}`">
        <div class="all-goods__picture">
          <img class="all-goods__image" :src="product.image" alt="" />
        </div>
        <div>
          <h3 class="all-goods__title">{{ product.title }}</h3>
          <p class="all-goods__description">{{ product.description }}</p>
          <p class="all-goods__price">${{ product.price }}</p>
        </div>
      </router-link>
    </li>
  </TransitionGroup>
</template>

<script>
export default {
  props: {
    products: Array,
  },
};
</script>

<style lang="scss">
.all-goods {
  @include reset-list;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  justify-content: space-between;
  min-height: 700px;
}

.all-goods__item {
  height: 100%;
}

.all-goods__link {
  height: 100%;
  color: $color-default-black;
  outline: none;
  text-decoration: none;

  &:hover,
  &:focus {
    .all-goods__image {
      width: 100%;
      height: 100%;
    }

    .all-goods__title {
      &::after {
        width: 100%;
      }
      &::first-letter {
        color: $color-orange;
      }
    }
  }
}

.all-goods__picture {
  position: relative;
  width: 100%;
  height: 380px;
  margin-bottom: 20px;
  border-radius: 4px;
  overflow: hidden;

  .all-goods__image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    object-fit: contain;
    border-radius: 4px;
    transition: 0.4s;
  }
}

.all-goods__title {
  @include main-title;
  position: relative;
  // display: inline;
  margin-bottom: 20px;
  font-size: 20px;
  text-transform: lowercase;
  transition: 1s;

  &::after {
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    content: '';
    background-color: $color-orange;
    border-radius: 25px;
    transition: 0.4s;
  }

  &::first-letter {
    text-transform: uppercase;
  }
}

.all-goods__description {
  @include main-description;
  margin-bottom: 20px;
  font-size: 18px;
  color: #555555;
}

.all-goods__price {
  @include main-title;
  font-size: 14px;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}

@media (min-width: $viewport--md) and (max-width: $viewport--lg) {
  .all-goods {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: $viewport--sm) and (max-width: calc(#{$viewport--md} - 1px)) {
  .all-goods {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .all-goods__item {
    max-width: 450px;
  }

  .all-goods__picture {
    height: 300px;
  }

  .all-goods__title {
    font-size: 18px;
  }

  .all-goods__description {
    font-size: 16px;
  }
}
</style>
