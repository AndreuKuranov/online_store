<template>
  <form @submit.prevent class="page-admin__form form-admin">
    <h2 class="form-admin__title">{{ title }}</h2>

    <div class="form-admin__body">
      <div class="form-admin__item">
        <label class="form-admin__label" for="brand">Бренд</label>
        <AdminSelect
          class="form-admin__select"
          v-model="valueSelectedBrand"
          id="brand"
          :options="brandProduct"
          :defaultOptionText="'Выберете бренд'"
        />
      </div>

      <div class="form-admin__item">
        <label class="form-admin__label" for="type">Тип</label>
        <AdminSelect
          class="form-admin__select"
          v-model="valueSelectedType"
          id="type"
          :options="typeProduct"
          :defaultOptionText="'Выберете тип'"
        />
      </div>

      <div class="form-admin__item">
        <label class="form-admin__label" for="name-product">Наименование продукта</label>
        <AdminInput
          class="form-admin__input"
          placeholder="Наименование"
          v-model="nameProduct"
          id="name-product"
        />
      </div>

      <div class="form-admin__item">
        <label class="form-admin__label" for="price-product">Цена</label>
        <AdminInput
          class="form-admin__input"
          placeholder="Цена"
          type="number"
          id="name-product"
          v-model="priceProduct"
        />
      </div>

      <div class="form-admin__item">
        <label class="form-admin__label" for="img-product">Картинка</label>
        <input
          class="form-admin__input input-admin--file"
          type="file"
          id="img-product"
          @change="setImgProduct"
          ref="file"
        />
      </div>

      <div class="form-admin__item">

        <div class="form-admin__characteristics characteristics">
          <h3 class="characteristics__title">ТТХ</h3>
          <div 
            class="characteristics__row"
            v-for="item in info"
            :key="item.id"
          >
            <div class="characteristics__item">
              <AdminInput
                class="characteristics__input"
                placeholder="Введите название свойства"
                @change="changeInfo('title', $event.target.value, item.id)"
                :value="item.title"
              />
            </div>

            <div class="characteristics__item">
              <AdminInput
                class="characteristics__input"
                placeholder="Введите описание свойства"
                @change="changeInfo('description', $event.target.value, item.id)"
                :value="item.description"
              />
            </div>

            <div class="characteristics__item">
              <AdminButton
                class="characteristics__btn btn-admin--delete"
                type="button"
                @click="removeInfo(item.id)"
              >
                <span class="material-symbols-outlined characteristics__material-symbols-outlined">delete</span>
              </AdminButton>
            </div>
          </div>
        </div>
      </div>

      <div class="form-admin__item">
        <AdminButton
          class="form-admin__btn"
          type="button"
          @click="setInfo"
        >
          Добавить новое свойство
          <span class="material-symbols-outlined form-admin__material-symbols-outlined">add</span>
        </AdminButton>
      </div>

      <div class="form-dmin__item">
        <AdminButton
          class="form-admin__btn"
          type="button"
          @click="addDevice"
        >
          {{ btnText }}
        </AdminButton>
      </div>
    </div>

  </form>
</template>

<script>
import { createDevice } from '@/http/productAPI';
import { uniqueId } from '@/functions/functions.js';
import { mapState, mapActions } from 'vuex';
import AdminButton from '@/components/admin/AdminButton.vue';
import AdminInput from '@/components/admin/AdminInput.vue';
import AdminSelect from '@/components/admin/AdminSelect.vue';

export default {
  components: {
    AdminButton,
    AdminInput,
    AdminSelect,
  },
  data() {
    // все данные по продукту должны быть одним свойством, по умолчанию это null
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
      this.info.push({ title: '', description: '', id: uniqueId() })
    },
    removeInfo(id) {
      this.info = this.info.filter(item => item.id !== id)
    },
    setImgProduct() {
      this.imgProduct = this.$refs.file.files[0];
    },
    changeInfo(key, value, id) {
      this.info = this.info.map(i => i.id === id ? {...i, [key]: value} : i)
    },
    addDevice() {
      if(this.$route.path === '/admin/product/createProduct') {
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

    if(this.$route.path === '/admin/product/createProduct') {
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
.form-admin {

  &__title {

  }

  &__body {
    display: grid;
    gap: 15px;
  }

  &__item {

  }

  &__label {
    display: block;
    margin: 0 0 5px 10px;
  }

  &__select {

  }

  &__input {
  }

  &__btn {

  }
}

.characteristics {
  display: grid;
  gap: 10px;

  &__title {
    margin: 20px 0 0 10px;
  }
  &__row {
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    gap: 10px;
  }

  &__item {

  }

  &__input {
    height: 100%;
    width: auto;
  }

  &__btn {

  }
}
</style>