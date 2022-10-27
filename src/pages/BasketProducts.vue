<template>
  <TitleBlock class="page__title">
    Ваша корзина
  </TitleBlock>

  <div class="page__basket basket">
    <div class="basket__container container">
      <div class="basket__body">
        <div class="basket__product-list">
          <div
            class="basket__column"
            v-for="product in products"
            :key="product.id"
          >
            <CardProduct
              :basket="true"
              class="basket__card-product"
              :product="product"
            />
          </div>
        </div>

        <div class="basket__price-block">
          <div class="basket__price">Итого: 10 000 руб</div>
          <my-button
            class="basket__btn"
            type="button"
            @click="modalVisible = true"
          >
            Оформить
          </my-button>
        </div>
      </div>
    </div>
  </div>

  <ListProducts class="page__products" :title="titleTop" :products="productsTop" />

  <my-modal v-model:stateModal="modalVisible">
    <OrderingForm />
  </my-modal>
</template>

<script>
import ListProducts from '@/components/ListProducts.vue';
import TitleBlock from '@/components/TitleBlock.vue';
import CardProduct from '@/components/CardProduct.vue';
import OrderingForm from '@/components/OrderingForm.vue';

export default {
  components: {
    TitleBlock,
    ListProducts,
    CardProduct,
    OrderingForm,
  },
  data() {
    return {
      modalVisible: false,
      titleTop: 'Топ продаж',
      productsTop: [
        { id: 'products1', link: '/product', name: 'Название товара', price: '8 888', img: '01.jpg' },
        { id: 'products2', link: '/product', name: 'Название товара', price: '8 888', img: '02.jpg' },
        { id: 'products3', link: '/product', name: 'Название товара', price: '8 888', img: '03.jpg' },
        { id: 'products4', link: '/product', name: 'Название товара', price: '8 888', img: '04.jpg' },
      ],
      products: [
        { id: 'products1', link: '/product', name: 'Название товара', price: '9 999', img: '01.jpg' },
        { id: 'products2', link: '/product', name: 'Название товара', price: '9 999', img: '02.jpg' },
        { id: 'products3', link: '/product', name: 'Название товара', price: '9 999', img: '03.jpg' },
        { id: 'products4', link: '/product', name: 'Название товара', price: '9 999', img: '04.jpg' },
        { id: 'products5', link: '/product', name: 'Название товара', price: '9 999', img: '01.jpg' },
      ],
    }
  },
}
</script>

<style lang="scss">
.basket {
  padding: 0 0 24px 0;

  @include min-width-xs {
    padding: 0 0 32px 0;
  }
  @include min-width-md {
    padding: 0 0 40px 0;
  }

  &__container {

  }

  &__body {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr;

    @include min-width-lg {
      grid-template-columns: 75% 1fr;
    }
  }

  &__product-list {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;

    @include min-width-md {
      margin: -10px;
    }
  }

  &__column {
    flex: 0 1 100%;

    @include min-width-xs {
      flex: 0 1 50%;
    }

    @media (min-width: 900px) {
      flex: 0 1 33.333%;
    }
  }

  &__card-product {
    margin: 8px;

    @include min-width-md {
      margin: 10px;
    }
  }

  &__price-block {

  }

  &__price {
    font-size: var(--title-font-size);
    font-size: 24px;
    margin: 0 0 16px 0;

    @include min-width-xs {
      font-size: 30px;
    }
    @include min-width-md {
      margin: 0 0 22px 0;
    }
  }

  &__btn {
    width: 100%;
    min-height: 44px;

    @include min-width-xs {
      min-height: 50px;
    }

    @include min-width-sm {
      min-height: 54px;
    }

    @include min-width-md {
      min-height: 60px;
    }
  }
}
</style>