<template>
  <MainPage />
</template>

<script>
import axios from 'axios';
import MainPage from './components/MainPage.vue';

export default {
  components: {
    MainPage,
  },
  data() {
    return {
      likes: 0,
      dislikes: 0,
    };
  },
  methods: {
    async fetchData() {
      console.log('START');
      const response = await axios.get('https://fakestoreapi.com/products/categories');
      console.log('FINISH');
      console.log(response.data);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
