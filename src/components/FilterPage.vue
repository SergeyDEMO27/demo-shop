<template>
  <MainHeader />
  <div class="filter-page__goods">
    <div class="filter-page__container">
      <AllGoods :goods="goods" />
    </div>
  </div>
  <div class="filter-page__sign">
    <div class="filter-page__wrapper">
      <MainSign />
    </div>
  </div>
  <MainFooter />
</template>

<script>
import MainHeader from './MainHeader.vue';
import MainFooter from './MainFooter.vue';
import AllGoods from './AllGoods.vue';
import MainSign from './MainSign.vue';

export default {
  components: {
    MainHeader,
    MainFooter,
    AllGoods,
    MainSign,
  },
  data() {
    return {
      goods: [
        {
          id: Date.now(),
          title: 'watch',
          description: 'sadasdasadsasd',
          price: 500,
          path: '0',
        },
        {
          id: Date.now(),
          title: 'mobile',
          description: 'sadasdasadsasd',
          price: 200,
          path: '1',
        },
        {
          id: Date.now(),
          title: 'television',
          description: 'sadasdasadsasd',
          price: 300,
          path: '2',
        },
        {
          id: Date.now(),
          title: 'audiosystem',
          description: 'sadasdasadsasd',
          price: 400,
          path: '0',
        },
        {
          id: Date.now(),
          title: 'computer',
          description: 'sadasdasadsasd',
          price: 100,
          path: '1',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.filter-page__goods {
  width: 100%;
  min-height: 400px;
  padding: 60px 0;
  background-color: $color-gray;
}

.filter-page__container {
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
}

.filter-page__sign {
  width: 100%;
  min-height: 400px;
  padding: 60px 0;
  background-color: $color-yellow;

  .filter-page__wrapper {
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
  }
}
</style>
