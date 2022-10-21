<template>
  <section class="my-swiper">
    <div class="my-swiper__container container">
      <swiper
        navigation
        :loop="true"
        :centeredSlides="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules"
        class="my-swiper__swiper"
      >
        <swiper-slide 
          class="my-swiper__swiper-slide"
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
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/bundle";

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
.my-swiper {
  background-color: $additionalBdColor;

  &__container {

  }
  &__swiper {
    width: 100%;
    height: 100%;
  }
  &__swiper-slide {
    text-align: center;
    background: $additionalBdColor;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;

    min-height: px2rem(535px);
  }
}

.swiper-button-prev {
  &::after {
    content: '';
    font-family: none;

    min-width: px2rem(40px);
    min-height: px2rem(40px);
    border-left: px2rem(10px) solid $blackColor;
    border-bottom: px2rem(10px) solid $blackColor;
    transition: 0.2s;
    transform: translate3d(px2rem(15px), 0, 0) rotate(45deg);
    
  }
  &:hover::after {
    filter: drop-shadow(px2rem(5px) 0px px2rem(5px) $blackColor);
  }
}

.swiper-button-next {
  &::after {
    content: '';
    font-family: none;

    min-width: px2rem(40px);
    min-height: px2rem(40px);
    border-right: px2rem(10px) solid $blackColor;
    border-top: px2rem(10px) solid $blackColor;
    transition: 0.2s;
    transform: translate3d(px2rem(-15px), 0, 0) rotate(45deg);
    
  }
  &:hover::after {
    filter: drop-shadow(0px px2rem(5px) px2rem(5px) $blackColor);
  }
}
</style>