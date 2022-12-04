<template>
  <ul class="elements-list">
    <li
      class="elements-list__item"
      v-for="item in elements"
      :key="item.id"
    >
      <h4 class="elements-list__title">{{ item.name }}</h4>

      <div class="elements-list__btn-block">
        <router-link
          class="elements-list__link"
          :to="`${url}/${item.id}`"
        >
          <span class="material-symbols-outlined elements-list__material-symbols-outlined">edit</span>
        </router-link>

        <button
          class="elements-list__btn"
          type="button"
          @click="deleteModal(item)"
        >
          <span class="material-symbols-outlined elements-list__material-symbols-outlined">delete</span>
        </button>
      </div>
      
    </li>
  </ul>
  <my-modal 
    v-model:stateModal="modalVisible"
  >
    <div class="delete-modal">
      <div class="delete-modal__text">Удалить: "{{name}}"?</div>
      <div class="delete-modal__btn-block">
        <button 
          class="delete-modal__btn"
          @click="deleteElement"
        >
          Да
        </button>
        <button 
          class="delete-modal__btn"
          @click="closeModal"
        >
          Нет
        </button>
      </div>
    </div>
  </my-modal>
</template>

<script>
export default {
  props: {
    elements: {
      type: Object,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      modalVisible: false,
      name: '',
      id: '',
    }
  },
  methods: {
    deleteModal(item) {
      this.modalVisible = true;
      this.name = item.name;
      this.id = item.id;
    },
    closeModal() {
      this.modalVisible = false;
      this.name = '';
      this.id = '';
    },
    deleteElement() {
      this.$emit("deleteElement", this.id);
      this.modalVisible = false;
    }
  }
}
</script>

<style lang="scss">
.elements-list {
  @extend %list;
  display: grid;
  gap: 10px;

  &__item {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid var(--dark-color);
    border-radius: 5px;
  }

  &__title {
    display: flex;
    align-items: center;
    margin: 0;
  }

  &__btn-block {
    display: flex;
    gap: 15px;
  }

  &__link {
    @extend %link;
  }

  &__btn {
    @include button-clear;
    cursor: pointer;
  }

  &__material-symbols-outlined {

  }
}

.delete-modal {

  &__text {
    text-align: center;
  }

  &__btn-block {
    margin-top: 30px;
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  &__btn {

  }
}
</style>