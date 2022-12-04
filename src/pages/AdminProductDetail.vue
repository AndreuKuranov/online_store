<template>
    <form @submit.prevent class="ordering-form">
    <h2 class="ordering-form__title">{{ title }}</h2>

    <div class="ordering-form__body">
      <div class="ordering-form__item">
        <my-select
          v-model="valueSelectedBrand"
          :options="brandProduct"
          :defaultOptionText="'Выберете бренд'"
        />
      </div>

      <div class="ordering-form__item">
        <my-select
          v-model="valueSelectedType"
          :options="typeProduct"
          :defaultOptionText="'Выберете тип'"
        />
      </div>

      <div class="ordering-form__item">
        <my-input
          class="ordering-form__form-input"
          placeholder="Наименование"
          v-model="nameProduct"
        />
      </div>

      <div class="ordering-form__item">
        <my-input
          class="ordering-form__form-input"
          placeholder="Цена"
          type="number"
          v-model="priceProduct"
        />
      </div>

      <div class="ordering-form__item">
        <input
          type="file"
          @change="setImgProduct"
          ref="file"
        />
      </div>

      <div class="ordering-form__item">
        <my-button
          class="ordering-form__btn"
          type="button"
          @click="setInfo"
        >
          Добавить новое свойство
        </my-button>
      </div>

      <div class="ordering-form__item">

        <div 
          class="ordering-form__body"
          v-for="item in info"
          :key="item.number"
        >
          <div class="ordering-form__item">
            <my-input
              class="ordering-form__form-input"
              placeholder="Введите название свойства"
              @change="changeInfo('title', $event.target.value, item.number)"
              :value="item.title"
            />
          </div>

          <div class="ordering-form__item">
            <my-input
              class="ordering-form__form-input"
              placeholder="Введите описание свойства"
              @change="changeInfo('description', $event.target.value, item.number)"
              :value="item.description"
            />
          </div>

          <div class="ordering-form__item">
            <my-button
              class="ordering-form__btn"
              type="button"
              @click="removeInfo(item.number)"
            >
              Удалить свойство
            </my-button>
          </div>
        </div>
  
      </div>

      <div class="ordering-form__item">
        <my-button
          class="ordering-form__btn"
          type="button"
          @click="addDevice"
        >
          {{ btnText }}
        </my-button>
      </div>
    </div>

  </form>
</template>

<script>
import { createDevice } from '@/http/productAPI';
import { uniqueId } from '@/functions/functions.js';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  data() {
    return {
      nameProduct: '',
      priceProduct: 0,
      imgProduct: null,
      valueSelectedBrand: '',
      valueSelectedType: '',
      info: [],

      title: '',
      btnText: '',
    }
  },
  computed: {
    ...mapState({
      typeProduct: state => state.shop.typeProduct,
      brandProduct: state => state.shop.brandProduct,
    }),
  },
  methods: {
    ...mapActions({
      putDevicesAction: 'shop/putDevicesAction',
      getOneDevicesAction: 'shop/getOneDevicesAction',
      getBrandsAction: 'shop/getBrandsAction',
      getTypesAction: 'shop/getTypesAction',
    }),

    setInfo() {
      this.info.push({ title: '', description: '', number: uniqueId() })
    },
    removeInfo(number) {
      this.info = this.info.filter(item => item.number !== number)
    },
    setImgProduct() {
      this.imgProduct = this.$refs.file.files[0];
    },
    changeInfo(key, value, number) {
      this.info = this.info.map(i => i.number === number ? {...i, [key]: value} : i)
    },
    addDevice() {
      if(this.$route.path === '/admin/product/creatingNewProduct') {
        const formData = new FormData()
        formData.append('name', this.nameProduct)
        formData.append('price', `${this.priceProduct}`)
        formData.append('img', this.imgProduct)
        formData.append('brandId', this.valueSelectedBrand)
        formData.append('typeId', this.valueSelectedType)
        formData.append('info', JSON.stringify(this.info))
        createDevice(formData).then(data => {
          this.nameProduct = '';
          this.priceProduct = 0;
          this.imgProduct = null;
          this.valueSelectedBrand = '';
          this.valueSelectedType = '';
          this.info = [];
        })
      }
      
      if(this.$route.params.id) {
        console.log(this.info);
        this.putDevicesAction({
          id: this.$route.params.id,
          name: this.nameProduct,
          price: this.priceProduct,
          img: this.imgProduct,
          brandId: this.valueSelectedBrand,
          typeId: this.valueSelectedType,
          info: JSON.stringify(this.info),
        })
      }
    },
  },
  mounted() {
    this.getBrandsAction();
    this.getTypesAction();

    if(this.$route.path === '/admin/product/creatingNewProduct') {
      this.title = 'Создание продукта';
      this.btnText = 'Создать';
    }

    if(this.$route.params.id) {
      this.title = 'Редактирование продукта';
      this.btnText = 'Cохранить';
      this.getOneDevicesAction(this.$route.params.id).then(data => {
        this.nameProduct = data.name;
        this.priceProduct = data.price;
        this.imgProduct = data.img;
        this.valueSelectedBrand = data.brandId;
        this.valueSelectedType = data.typeId;
        this.info = data.info;
      });
    }
  }
}
</script>

<style lang="scss">

</style>