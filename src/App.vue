<template>
  <MainHeader />
  <MainPresentation />
</template>

<script>
import axios from 'axios';
import MainHeader from './components/MainHeader.vue';
import MainPresentation from './components/MainPresentation.vue';

export default {
  components: {
    MainHeader,
    MainPresentation,
  },
  data() {
    return {
      likes: 0,
      dislikes: 0,
    };
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDislike() {
      this.dislikes += 1;
    },
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
