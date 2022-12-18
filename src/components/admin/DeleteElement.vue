<template>
  <div class="delete-modal">
    <div class="delete-modal__text">Удалить: "{{ title }}"?</div>
    <div class="delete-modal__btn-block">
      <AdminButton 
        class="delete-modal__btn"
        @click="deleteElement"
      >
        Да
      </AdminButton>
      <AdminButton
        class="delete-modal__btn"
        @click="closeModal"
      >
        Нет
      </AdminButton>
    </div>
  </div>
</template>

<script>
import AdminButton from '@/components/admin/AdminButton.vue';

export default {
  components: {
    AdminButton,
  },
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
  },
  methods: {
    deleteElement() {
      this.$emit("deleteElement", this.id);
    },
    closeModal() {
      this.$emit("closeModal", false);
    }
  }
}
</script>

<style lang="scss">

</style>