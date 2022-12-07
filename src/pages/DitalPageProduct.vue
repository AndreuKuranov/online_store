<template>
  <TitleBlock class="page__title">
    {{ product.name }}
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
              :src="require(`@/image/${item.img}`)"
              :alt="item.name"
            />
          </swiper-slide>
        </swiper>
        <div class="product__price-block">
          <div class="product__price">Цена: {{ product.price }} руб</div>
          <div class="product__btn-block">
            <CounterComponent class="product__counter" />
            <my-button 
              class="product__btn" 
              type="button"
            >
              В корзину
            </my-button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <TabsComponent class="page__tabs">
    <TabComponent title="Характеристики" icon="settings_applications">
      <ul>
        <li
          v-for="item in product.info"
          :key="item.id"
        >
          {{ item.title }}: {{ item.description }}
        </li>
      </ul>
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
    title="Топ продаж" 
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
import { mapState, mapActions} from 'vuex';

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
      product: {},
      slides: [
        { id: 'slide1', img: '4.png', name: '4' },
        { id: 'slide2', img: '5.png', name: '5' },
        { id: 'slide3', img: '6.png', name: '6' },
      ],
    }
  },
  computed: {
    ...mapState({
      productsTop: state => state.shop.productsTop,
    }),
  },
  mounted() {
    this.getDevice(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      getOneDevicesAction: 'shop/getOneDevicesAction',
    }),

    getDevice(id) {
      this.getOneDevicesAction(id).then(data => this.product = data);
    }
  },
  watch: {
    $route(toRoute, ftomRoute) {
      if (toRoute.params.id) {
        this.getDevice(toRoute.params.id);
      }
    }
  }
};
</script>

<style lang="scss">
.product {
  &__container {

  }

  &__body {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr;

    @include min-width-md {
      grid-template-columns: 60% 1fr;
    }
    @include min-width-lg {
      grid-template-columns: 67% 1fr;
    }
  }

  &__my-swiper {

  }

  &__price-block {
    margin: 3px 0 0 0;
  }

  &__price {
    font-family: var(--font-source-sans-pro);
    font-size: 24px;
    margin: 0 0 16px 0;

    @include min-width-xs {
      font-size: 30px;
    }
    @include min-width-md {
      font-size: var(--title-font-size);
      margin: 0 0 22px 0;
    }
  }

  &__btn-block {
    display: flex;
    gap: 10px;
  }

  &__counter {
    min-width: 150px;

    @include min-width-lg {
      min-width: 160px;
    }
  }

  &__btn {
    width: 100%;
  }
}
</style>