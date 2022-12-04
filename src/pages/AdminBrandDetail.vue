<template>
  <form @submit.prevent class="ordering-form">
    <h2 class="ordering-form__title">{{ title }}</h2>

    <div class="ordering-form__body">
      <div class="ordering-form__item">
        <my-input
          class="ordering-form__form-input"
          v-focus
          placeholder="Наименование"
          v-model="value"
        />
      </div>

      <div class="ordering-form__item">
        <my-button
          class="ordering-form__btn"
          type="button"
          @click="addBrand"
        >
          {{ btnText }}
        </my-button>
      </div>
    </div>

  </form>
</template>

<script>
import { createBrand } from '@/http/productAPI';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

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
      if(this.$route.path === '/admin/brand/creatingNewBrand') {
        createBrand({ name: this.value }).then(data => this.value = '')
      }

      if(this.$route.params.id) {
        this.putBrandsAction({ id: this.$route.params.id, name: this.value })
      }
    }
  },
  mounted() {
    if(this.$route.path === '/admin/brand/creatingNewBrand') {
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