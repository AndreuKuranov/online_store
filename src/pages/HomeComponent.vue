<template>
  <section class="page__banner banner">
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

  <ListProducts
    class="page__products"
    :title="title"
    :products="products"
  />
  <ListProducts
    class="page__products"
    :title="titleTop"
    :products="productsTop"
  />
</template>

<script>
import ListProducts from '@/components/ListProducts.vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/bundle";

export default {
  components: {
    ListProducts,
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
      title: 'Товары',
      products: [
        {id: "products1", link: "/product", name: "Название товара", price: "9 999", img: '01.jpg'},
        {id: "products2", link: "/product", name: "Название товара", price: "9 999", img: '02.jpg'},
        {id: "products3", link: "/product", name: "Название товара", price: "9 999", img: '03.jpg'},
        {id: "products4", link: "/product", name: "Название товара", price: "9 999", img: '04.jpg'},
      ],
      titleTop: 'Топ продаж',
      productsTop: [
        {id: "products1", link: "/product", name: "Название товара", price: "8 888", img: '01.jpg'},
        {id: "products2", link: "/product", name: "Название товара", price: "8 888", img: '02.jpg'},
        {id: "products3", link: "/product", name: "Название товара", price: "8 888", img: '03.jpg'},
        {id: "products4", link: "/product", name: "Название товара", price: "8 888", img: '04.jpg'},
      ]
    }
  },
};
</script>

<style lang="scss">
.banner {
  background-color: $additionalBdColor;
  margin: 0 0 px2rem(32px) 0;

  &__container {

  }

  &__my-swiper {
    
  }
}
</style>