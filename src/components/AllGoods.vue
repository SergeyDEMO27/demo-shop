<template>
  <ul class="all-goods">
    <li class="all-goods__item" v-for="good in goods" :key="good.id">
      <router-link class="all-goods__link" to="/product">
        <div class="all-goods__picture">
          <img
            class="all-goods__image"
            :src="require(`@/images/background/main-bg-${good.path}.jpeg`)"
            alt=""
          />
        </div>
        <div>
          <h3 class="all-goods__title">{{ good.title }}</h3>
          <p class="all-goods__description">{{ good.description }}</p>
          <p class="all-goods__price">${{ good.price }}</p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    goods: Array,
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
  text-decoration: none;

  &:hover {
    .all-goods__image {
      transform: scale(1.1);
    }

    .all-goods__title::after {
      width: 100%;
    }
  }
}

.all-goods__picture {
  height: 380px;
  border-radius: 4px;
  overflow: hidden;

  .all-goods__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
    transition: 0.4s;
  }
}

.all-goods__title {
  @include main-title;
  position: relative;
  display: inline;
  font-size: 16px;
  text-transform: uppercase;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    content: '';
    background-color: $color-orange;
    border-radius: 25px;
    transition: 0.4s;
  }
}

.all-goods__description {
  @include main-description;
  color: #555555;
}

.all-goods__price {
  @include main-title;
  font-size: 14px;
}
</style>
