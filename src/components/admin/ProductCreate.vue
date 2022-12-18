<template>
  <form @submit.prevent class="ordering-form">
    <h2 class="ordering-form__title">Создание продукта</h2>

    <div class="ordering-form__body">
      <div class="ordering-form__item">
        <AdminSelect
          v-model="valueSelectedBrand"
          :options="brandProduct"
          :defaultOptionText="'Выберете бренд'"
        />
      </div>

      <div class="ordering-form__item">
        <AdminSelect
          v-model="valueSelectedType"
          :options="typeProduct"
          :defaultOptionText="'Выберете тип'"
        />
      </div>

      <div class="ordering-form__item">
        <AdminInput
          class="ordering-form__form-input"
          placeholder="Наименование"
          v-model="nameProduct"
        />
      </div>

      <div class="ordering-form__item">
        <AdminInput
          class="ordering-form__form-input"
          placeholder="Цена"
          type="number"
          v-model="priceProduct"
        />
      </div>

      <div class="ordering-form__item">
        <AdminInput
          type="file"
          @change="setImgProduct"
          ref="file"
        />
      </div>

      <div class="ordering-form__item">
        <AdminButton
          class="ordering-form__btn"
          type="button"
          @click="setInfo"
        >
          Добавить новое свойство
        </AdminButton>
      </div>

      <div class="ordering-form__item">

        <div 
          class="ordering-form__body"
          v-for="item in info"
          :key="item.number"
        >
          <div class="ordering-form__item">
            <AdminInput
              class="ordering-form__form-input"
              placeholder="Введите название свойства"
              @change="changeInfo('title', $event.target.value, item.number)"
              :value="item.title"
            />
          </div>

          <div class="ordering-form__item">
            <AdminInput
              class="ordering-form__form-input"
              placeholder="Введите описание свойства"
              @change="changeInfo('description', $event.target.value, item.number)"
              :value="item.description"
            />
          </div>

          <div class="ordering-form__item">
            <AdminButton
              class="ordering-form__btn"
              type="button"
              @click="removeInfo(item.number)"
            >
              Удалить свойство
            </AdminButton>
          </div>
        </div>
  
      </div>

      <div class="ordering-form__item">
        <AdminButton
          class="ordering-form__btn"
          type="button"
          @click="addDevice"
        >
          Создать
        </AdminButton>
      </div>
    </div>

  </form>
</template>

<script>
  import { mapState } from 'vuex';
  import { uniqueId } from '@/functions/functions.js';
  import { createDevice } from '@/http/productAPI';
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
      return {
        nameProduct: '',
        priceProduct: 0,
        imgProduct: null,
        valueSelectedBrand: '',
        valueSelectedType: '',
        info: [],
      }
    },
    computed: {
      ...mapState({
        typeProduct: state => state.shop.typeProduct,
        brandProduct: state => state.shop.brandProduct,
      }),
    },
    methods: {
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
        const formData = new FormData()
        formData.append('name', this.nameProduct)
        formData.append('price', `${this.priceProduct}`)
        formData.append('img', this.imgProduct)
        formData.append('brandId', this.valueSelectedBrand)
        formData.append('typeId', this.valueSelectedType)
        formData.append('info', JSON.stringify(this.info))
        createDevice(formData).then(data => console.log('ok'))
      },
    }
  }
</script>

<style lang="scss">

</style>