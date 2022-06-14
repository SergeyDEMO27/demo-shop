<template>
  <div class="main-page">
    <MainHeader @openLogin="isLoginForm = true" :isMainPage="true" />
    <div class="main-page__main">
      <transition-group name="fade">
        <MainPresentation :key="previewId" :preview="presentItems[previewId]" />
      </transition-group>
      <AboutUs />
      <MainProducts
        :title="productsElec.title"
        :description="productsElec.description"
        :categories="productsElec.items"
        :productsLimit="3 / productsElec.items.length"
        @fetchError="isError = true"
      />
      <MainProducts
        class="main-page__clothing"
        :title="productsCloth.title"
        :description="productsCloth.description"
        :categories="productsCloth.items"
        :productsLimit="3 / productsCloth.items.length"
        @fetchError="isError = true"
      />
      <MainFeedback />
    </div>
    <MainFooter />
    <Transition name="slide-fade">
      <MainModal
        v-if="isLoginForm"
        @click="isLoginForm = false"
        @keypress.enter="isLoginForm = false"
      >
        <MainLogin @click.stop @closeForm="isLoginForm = false" />
        <ButtonClose class="main-page__close" />
      </MainModal>
    </Transition>
    <Transition name="slide-fade">
      <MainModal v-if="isError" @click="isError = false" @keypress.enter="isError = false">
        <MainError>Something went wrong. Try to reload page</MainError>
      </MainModal>
    </Transition>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import MainPresentation from '@/components/MainPresentation.vue';
import AboutUs from '@/components/AboutUs.vue';
import MainProducts from '@/components/MainProducts.vue';
import MainFeedback from '@/components/MainFeedback.vue';
import MainFooter from '@/components/MainFooter.vue';
import MainModal from '@/components/UI/MainModal.vue';
import MainLogin from '@/components/MainLogin.vue';
import MainError from '@/components/UI/MainError.vue';
import ButtonClose from '@/components/UI/ButtonClose.vue';

export default {
  name: 'MainPage',
  components: {
    MainHeader,
    MainPresentation,
    AboutUs,
    MainProducts,
    MainFeedback,
    MainFooter,
    MainModal,
    MainLogin,
    MainError,
    ButtonClose,
  },
  data() {
    return {
      previewId: 0,
      previewInterval: '',
      isLoginForm: false,
      isError: false,
      presentItems: [
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
      productsElec: {
        title: 'Best Electronics Of Demo Shop',
        description:
          "We're dedicated to providing the best prices, selection, and overall experience you'll find online. To put it simply, we've created a unique store that offers our customers the ability to find what they want easily and quickly. And, with our free shipping, hassle-free returns, lowest price, 30-day returns window and 3 years warranty we offer our customers a no-risk opportunity to try us out.",
        items: ['electronics'],
      },
      productsCloth: {
        title: 'Best fineries of Demo Shop',
        description:
          "Caters to thoughtful shoppers who appreciate unique designs and top quality pieces you just can't find anywhere else. We are constantly curating fresh new collections and looking for the next big thing our customers will love. Our Mission is to make a difference through our branding by staying ahead of the fashion trends, defining style and giving customers what they want.",
        items: ['jewelery', "men's clothing", "women's clothing"],
      },
    };
  },
  methods: {
    changePreviewId() {
      this.previewId = this.previewId + 1 > this.presentItems.length - 1 ? 0 : this.previewId + 1;
    },
    setPreviewInterval() {
      this.previewInterval = setInterval(this.changePreviewId, 8000);
    },
  },
  mounted() {
    this.setPreviewInterval();
  },
  beforeUnmount() {
    clearInterval(this.previewInterval);
  },
};
</script>

<style lang="scss">
.main-page {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.main-page__main {
  flex: 1 1 auto;
}

.main-page__clothing {
  background-color: $color-default-white;
  text-align: right;
}

.main-page__close {
  position: absolute;
  top: 10px;
  right: 15px;
}

.slide-fade-enter-active {
  @include default-transition;
}

.slide-fade-leave-active {
  @include default-transition;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
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
