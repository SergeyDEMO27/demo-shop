<template>
  <MainHeader :isMainPage="true" />

  <!-- <TransitionGroup name="fade">
    <MainPresentation
      v-show="parseInt(previewId, 10) === index"
      v-for="(presentation, index) in presentationItems"
      :key="presentation"
      :preview="presentation"
    />
  </TransitionGroup> -->
  <Transition>
    <MainPresentation :key="presentationItems[previewId]" :preview="presentationItems[previewId]" />
  </Transition>
  <AboutUs />
  <MainElectronic />
  <MainGoods />
  <MainFeedback />
  <MainFooter />
</template>

<script>
// import axios from 'axios';
import MainHeader from './MainHeader.vue';
import MainPresentation from './MainPresentation.vue';
import AboutUs from './AboutUs.vue';
import MainElectronic from './MainElectronic.vue';
import MainGoods from './MainGoods.vue';
import MainFeedback from './MainFeedback.vue';
import MainFooter from './MainFooter.vue';

export default {
  components: {
    MainHeader,
    MainPresentation,
    AboutUs,
    MainElectronic,
    MainGoods,
    MainFeedback,
    MainFooter,
  },
  data() {
    return {
      previewId: 0,
      previewInterval: '',
      presentationItems: [
        {
          id: 0,
          title: "Like nothing you've heard before",
          description:
            'One-point ELECTRONICS system and contemporary design icon with powerful sound and customisable design.',
          link: 'electronics',
        },
        {
          id: 1,
          title: "Like nothing you've jewelry before",
          description:
            'One-point JEWELRY system and contemporary design icon with powerful sound and customisable design.',
          link: 'jewelery',
        },
        {
          id: 2,
          title: "Like nothing you've mens cloth before",
          description:
            'One-point MENS CLOTH system and contemporary design icon with powerful sound and customisable design.',
          link: "MEN'S CLOTHING",
        },
        {
          id: 3,
          title: "Like nothing you've womens cloth before",
          description:
            'One-point WOMENS CLOTHING system and contemporary design icon with powerful sound and customisable design.',
          link: "WOMEN'S CLOTHING",
        },
      ],
    };
  },
  methods: {
    changePreviewId() {
      // eslint-disable-next-line operator-linebreak
      this.previewId =
        this.previewId + 1 > this.presentationItems.length - 1 ? 0 : this.previewId + 1;
    },
    setPreviewInterval() {
      this.previewInterval = setInterval(this.changePreviewId, 5000);
    },
  },
  // mounted() {
  //   this.setPreviewInterval();
  // },
  // beforeUnmount() {
  //   clearInterval(this.previewInterval);
  // },
};
</script>

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 50%;
}
</style>
