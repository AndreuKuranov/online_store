<template>
  <div class="elements-list">
    <LinkAdd
      class="elements-list__link-add"
      :url="urlCreate" 
    />

    <ul class="elements-list__body">
      <li
        class="elements-list__item"
        v-for="item in elements"
        :key="item.id"
      >
        <h4 class="elements-list__title">{{ item.name }}</h4>

        <div class="elements-list__btn-block">
          <router-link
            class="elements-list__link btn-admin"
            :to="`${url}/${item.id}`"
          >
            <span class="material-symbols-outlined elements-list__material-symbols-outlined">edit</span>
          </router-link>

          <my-button
            class="elements-list__btn btn-admin--delete"
            type="button"
            @click="deleteModal(item)"
            :admin="true"
          >
            <span class="material-symbols-outlined elements-list__material-symbols-outlined">delete</span>
          </my-button>
        </div>
        
      </li>
    </ul>
  </div>

<!--  также как говорил на пред занятии, гораздо лучше будет посмотреть API существующих библиотек
и оттуда брать пример использования-->
<!--  модалка удаления - отдельный компонент, не может быть частью ElementsList фичи-->
  <my-modal 
    v-model:stateModal="modalVisible"
  >
    <div class="delete-modal">
      <div class="delete-modal__text">Удалить: "{{name}}"?</div>
      <div class="delete-modal__btn-block">
        <my-button 
          class="delete-modal__btn"
          @click="deleteElement"
          :admin="true"
        >
          Да
        </my-button>
        <my-button 
          class="delete-modal__btn"
          @click="closeModal"
          :admin="true"
        >
          Нет
        </my-button>
      </div>
    </div>
  </my-modal>
</template>

<script>
import LinkAdd from '@/components/admin/LinkAdd.vue';

export default {
  components: {
    LinkAdd,
  },
  props: {
    elements: {
      type: Object,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    urlCreate: {
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
  
  &__link-add {
    margin: 0 0 20px auto;
  }

  &__body {
    @extend %list;
    display: grid;
    gap: 10px;
  }

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
    color: var(--light-color);
  }

  &__btn {

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