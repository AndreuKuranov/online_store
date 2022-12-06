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
          @click="addType"
          :admin="true"
        >
          {{ btnText }}
        </my-button>
      </div>
    </div>

  </form>
</template>

<script>
import { createType } from '@/http/productAPI';
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
      putTypesAction: 'shop/putTypesAction',
      getOneTypesAction: 'shop/getOneTypesAction'
    }),

    addType() {
      if(this.$route.path === '/admin/type/creatingNewType') {
        createType({ name: this.value }).then(data => this.value = '')
      }

      if(this.$route.params.id) {
        this.putTypesAction({ id: this.$route.params.id, name: this.value })
      }
    }
  },
  mounted() {
    if(this.$route.path === '/admin/type/creatingNewType') {
      this.title = 'Создание типа';
      this.btnText = 'Создать';
    }

    if(this.$route.params.id) {
      this.title = 'Редактирование типа';
      this.btnText = 'Cохранить';
      this.getOneTypesAction(this.$route.params.id).then(data => this.value = data.name);
    }
  }
}
</script>

<style lang="scss">

</style>