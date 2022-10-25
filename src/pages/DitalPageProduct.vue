<template>
  <TitleBlock class="page__title">
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
            <CounterComponent class="product__counter" />
            <my-button class="product__btn" type="button">
              Купить
            </my-button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <TabsComponent class="page__tabs">
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

  <ListProducts class="page__products" :title="titleTop" :products="productsTop" />
</template>

<script>
import ListProducts from '@/components/ListProducts.vue';
import CounterComponent from '@/components/CounterComponent.vue';
import TabsComponent from '@/components/TabsComponent.vue';
import TabComponent from '@/components/TabComponent.vue';
import TitleBlock from '@/components/TitleBlock.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper';

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
        { id: 'products1', link: '/product', name: 'Название товара', price: '8 888', img: '01.jpg' },
        { id: 'products2', link: '/product', name: 'Название товара', price: '8 888', img: '02.jpg' },
        { id: 'products3', link: '/product', name: 'Название товара', price: '8 888', img: '03.jpg' },
        { id: 'products4', link: '/product', name: 'Название товара', price: '8 888', img: '04.jpg' },
      ]
    }
  },
};
</script>

<style lang="scss">
.product {
  &__container {}

  &__body {
    display: grid;
    gap: 20px;
    grid-template-columns: 67% 1fr;

    @include max-width-lg {
      grid-template-columns: 60% 1fr;
    }

    @include max-width-md {
      grid-template-columns: 1fr;
    }
  }

  &__my-swiper {}

  &__price-block {
    margin: 3px 0 0 0;
  }

  &__price {
    font-family: var(--font-source-sans-pro);
    font-size: var(--title-font-size);
    margin: 0 0 22px 0;

    @include max-width-md {
      font-size: 30px;
      margin: 0 0 16px 0;
    }

    @include max-width-xs {
      font-size: 24px;
    }
  }

  &__btn-block {
    display: flex;
    gap: 10px;
  }

  &__counter {
    min-width: 160px;

    @include max-width-lg {
      min-width: 150px;
    }
  }

  &__btn {
    width: 100%;
  }
}
</style>