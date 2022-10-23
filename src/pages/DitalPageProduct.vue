<template>
  <TitleBlock
    class="page__title"
  >
    Название товара
  </TitleBlock>
  <section class="page__product product">
    <div class="product__container container">
      <div class="product__body">
        <swiper
          navigation
          :loop="true"
          :centeredSlides="true"
          :autoplay="{
            delay: 10000,
            disableOnInteraction: false,
          }"
          :modules="modules"
          class="product__my-swiper my-swiper"
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
        <div class="product__price-block">
          <div class="product__price">Цена: 10 000 руб</div>
          <div class="product__btn-block">
            <CounterComponent
              class="product__counter"
            />
            <my-button 
              class="product__btn"
              type="button"
            >
              Купить
            </my-button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <TabsComponent
    class="page__tabs"
  >
    <TabComponent title="Характеристики" icon="settings_applications">
      text Характеристики
    </TabComponent>
    <TabComponent title="Описание" icon="description">
      text Описание
    </TabComponent>
    <TabComponent title="Отзывы" icon="reviews">
      text Отзывы
    </TabComponent>
  </TabsComponent>

  <ListProducts
    class="page__products"
    :title="titleTop"
    :products="productsTop"
  />
</template>

<script>
import ListProducts from '@/components/ListProducts.vue';
import CounterComponent from '@/components/CounterComponent.vue';
import TabsComponent from '@/components/TabsComponent.vue';
import TabComponent from '@/components/TabComponent.vue';
import TitleBlock from '@/components/TitleBlock.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';

export default {
  components: {
    ListProducts,
    Swiper,
    SwiperSlide,
    CounterComponent,
    TabsComponent,
    TabComponent,
    TitleBlock,
  },
  data() {
    return {
      modules: [Autoplay, Navigation, Pagination],
      slides: [
        { id: 'slide1', image: '4.png', altText: '4' },
        { id: 'slide2', image: '5.png', altText: '5' },
        { id: 'slide3', image: '6.png', altText: '6' },
      ],
      titleTop: 'Топ продаж',
      productsTop: [
        {id: 'products1', link: '/product', name: 'Название товара', price: '8 888', img: '01.jpg'},
        {id: 'products2', link: '/product', name: 'Название товара', price: '8 888', img: '02.jpg'},
        {id: 'products3', link: '/product', name: 'Название товара', price: '8 888', img: '03.jpg'},
        {id: 'products4', link: '/product', name: 'Название товара', price: '8 888', img: '04.jpg'},
      ]
    }
  },
};
</script>

<style lang="scss">
.product {
  &__container {

  }

  &__title {
    font-weight: 400;
    margin: px2rem(30px) 0 px2rem(28px) 0;
  }

  &__body {
    display: grid;
    gap: px2rem(20px);
    grid-template-columns: 67% 1fr;

    @media (max-width: 992px) {
      grid-template-columns: 60% 1fr;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  &__my-swiper {
    
  }

  &__price-block {
    margin: px2rem(3px) 0 0 0;
  }

  &__price {
    font-size: px2rem($titleFontSize);
    margin: 0 0 px2rem(22px) 0;
    font-family: $fontSourceSansPro;
  }

  &__btn-block {
    display: flex;
    gap: px2rem(10px);
  }

  &__counter {
    min-width: px2rem(160px);
  }

  &__btn {
    width: 100%;
    min-height: px2rem($baseHeightBtn);
  }
}
</style>