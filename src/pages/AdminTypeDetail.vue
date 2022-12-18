<template>
  <form @submit.prevent class="form-admin">
    <h2 class="form-admin__title">{{ title }}</h2>

    <div class="form-admin__body">
      <div class="form-admin__item">
        <AdminInput
          class="form-admin__input"
          v-focus
          placeholder="Наименование"
          v-model="value"
        />
      </div>

      <div class="form-admin__item">
        <AdminButton
          class="form-admin__btn"
          type="button"
          @click="addType"
        >
          {{ btnText }}
        </AdminButton>
      </div>
    </div>

  </form>
</template>

<script>
import { createType } from '@/http/productAPI';
import { mapActions } from 'vuex';
import AdminButton from '@/components/admin/AdminButton.vue';
import AdminInput from '@/components/admin/AdminInput.vue';

export default {
  components: {
    AdminButton,
    AdminInput,
  },
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
      if(this.$route.path === '/admin/type/createType') {
        createType({ name: this.value }).then(data => this.value = '')
      }

      if(this.$route.params.id) {
        this.putTypesAction({ id: this.$route.params.id, name: this.value })
      }
    }
  },
  created() {
    if(this.$route.path === '/admin/type/createType') {
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