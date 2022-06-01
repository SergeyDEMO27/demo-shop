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
import MainModal from '@/components/MainModal.vue';
import MainLogin from '@/components/MainLogin.vue';
import ButtonClose from '@/components/ButtonClose.vue';
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
    MainModal,
    MainLogin,
    ButtonClose,
  },
  data() {
    return {
      previewId: 0,
      previewInterval: '',
      isLoginForm: false,
      scrollPosition: 0,
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
          link: "men's clothing",
        },
        {
          id: 3,
          title: "Like nothing you've womens cloth before",
          description:
            'One-point WOMENS CLOTHING system and contemporary design icon with powerful sound and customisable design.',
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
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    this.setPreviewInterval();
    window.addEventListener('scroll', this.updateScroll);
  },
  beforeUnmount() {
    clearInterval(this.previewInterval);
    window.removeEventListener('scroll', this.updateScroll);
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
