<template>
  <MainHeader @openLogin="isLoginForm = true" :isMainPage="true" />
  <transition-group name="fade">
    <MainPresentation :key="previewId" :preview="presentationItems[previewId]" />
  </transition-group>
  <AboutUs />
  <MainElectronic />
  <MainGoods />
  <MainFeedback />
  <MainFooter />
  <Transition name="slide-fade">
    <MainModal
      v-show="isLoginForm"
      @click="isLoginForm = false"
      @keypress.enter="isLoginForm = false"
    >
      <MainLogin @click.stop @closeForm="isLoginForm = false" />
      <ButtonClose class="main-page__close" />
    </MainModal>
  </Transition>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import MainPresentation from '@/components/MainPresentation.vue';
import AboutUs from '@/components/AboutUs.vue';
import MainElectronic from '@/components/MainElectronic.vue';
import MainGoods from '@/components/MainGoods.vue';
import MainFeedback from '@/components/MainFeedback.vue';
import MainFooter from '@/components/MainFooter.vue';
import MainModal from '@/components/MainModal.vue';
import MainLogin from '@/components/MainLogin.vue';
import ButtonClose from '@/components/ButtonClose.vue';

export default {
  components: {
    MainHeader,
    MainPresentation,
    AboutUs,
    MainElectronic,
    MainGoods,
    MainFeedback,
    MainFooter,
    MainModal,
    MainLogin,
    ButtonClose,
  },
  data() {
    return {
      previewId: 0,
      previewInterval: '',
      isLoginForm: false,
      // scrollPosition: 0,
      presentationItems: [
        {
          id: 0,
          title: 'Highest standards',
          description:
            'We carry the most trusted brand names as well as our own lines of branded products with competitive pricing.',
          link: 'electronics',
        },
        {
          id: 1,
          title: 'Expert jewelers',
          description:
            'Say goodbye to traditional 10x markups. We design fine jewelry that you can wear every single day.',
          link: 'jewelery',
        },
        {
          id: 2,
          title: 'Ready for summer',
          description:
            'Explore our new season looks with a focus on layering, lightweight essentials and statement shirts.',
          link: "men's clothing",
        },
        {
          id: 3,
          title: 'New trends',
          description:
            "Discover this season's latest women's fashion and trends with the latest styles from new collections.",
          link: "women's clothing",
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
      this.previewInterval = setInterval(this.changePreviewId, 8000);
    },
    // updateScroll() {
    //   this.scrollPosition = window.scrollY;
    // },
  },
  mounted() {
    this.setPreviewInterval();
    // window.addEventListener('scroll', this.updateScroll);
  },
  beforeUnmount() {
    clearInterval(this.previewInterval);
    // window.removeEventListener('scroll', this.updateScroll);
  },
};
</script>

<style lang="scss">
.main-page__close {
  position: absolute;
  top: 10px;
  right: 35px;
}

.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.4s ease-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  // transform: translateX(20px);
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease;
}
.fade-enter-from,
.fade-leave-to {
  position: absolute;
  opacity: 0;
}
</style>
