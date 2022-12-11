<template>
  <form @submit.prevent class="form-admin">
    <h2 class="form-admin__title">{{ title }}</h2>

    <div class="form-admin__body">
      <div class="form-admin__item">
        <my-input
          class="form-admin__input"
          v-focus
          placeholder="Наименование"
          v-model="value"
          :admin="true"
        />
      </div>

      <div class="form-admin__item">
        <my-button
          class="form-admin__btn"
          type="button"
          @click="addBrand"
          :admin="true"
        >
          {{ btnText }}
        </my-button>
      </div>
    </div>

  </form>
</template>

<script>
import { createBrand } from '@/http/productAPI';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      value: '',
      title: '',
      btnText: '',
    }
  },
  methods: {
    ...mapActions({
      putBrandsAction: 'shop/putBrandsAction',
      getOneBrandsAction: 'shop/getOneBrandsAction'
    }),

    addBrand() {
      if(this.$route.path === '/admin/brand/createBrand') {
        createBrand({ name: this.value }).then(data => this.value = '')
      }

      if(this.$route.params.id) {
        this.putBrandsAction({ id: this.$route.params.id, name: this.value })
      }
    }
  },
  mounted() {
    if(this.$route.path === '/admin/brand/createBrand') {
      this.title = 'Создание бренда';
      this.btnText = 'Создать';
    }

    if(this.$route.params.id) {
      this.title = 'Редактирование бренда';
      this.btnText = 'Cохранить';
      this.getOneBrandsAction(this.$route.params.id).then(data => this.value = data.name);
    }
  }
}
</script>

<style lang="scss">

</style>