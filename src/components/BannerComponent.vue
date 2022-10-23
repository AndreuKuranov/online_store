<template>
  <section class="banner">
    <div class="banner__container container">
      <swiper
        navigation
        :loop="true"
        :centeredSlides="true"
        :autoplay="{
          delay: 10000,
          disableOnInteraction: false,
        }"
        :modules="modules"
        class="banner__my-swiper my-swiper"
      >
        <swiper-slide 
          class="my-swiper__slide"
          v-for="item in slides"
          :key="item.id"
        >
          <img 
            class="my-swiper__img" 
            :src="require(`@/image/${item.image}`)" 
            :alt="item.altText"
          />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slides: [
        { id: 'slide1', image: '4.png', altText: '4' },
        { id: 'slide2', image: '5.png', altText: '5' },
        { id: 'slide3', image: '6.png', altText: '6' },
      ],
      modules: [Autoplay, Navigation, Pagination],
    }
  },
};
</script>

<style lang="scss">
.banner {
  background-color: $additionalBGColor;
  margin: 0 0 px2rem(32px) 0;

  &__container {

  }

  &__my-swiper {
    
  }
}
</style>