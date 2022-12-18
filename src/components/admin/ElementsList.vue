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

          <AdminButton
            class="elements-list__btn btn-admin--delete"
            type="button"
            @click="deleteModal(item.name, url, item.id)"
          >
            <span class="material-symbols-outlined elements-list__material-symbols-outlined">delete</span>
          </AdminButton>
        </div>
        
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import LinkAdd from '@/components/admin/LinkAdd.vue';
import AdminButton from '@/components/admin/AdminButton.vue';

export default {
  components: {
    LinkAdd,
    AdminButton,
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
    }
  },
  methods: {
    ...mapMutations({
      setModalVisibleAdmin: 'modal/setModalVisibleAdmin',
      setDeleteElement: 'modal/setDeleteElement',
    }),

    deleteModal(title, name, id) {
      this.setDeleteElement({
        title,
        name,
        id,
      })

      this.setModalVisibleAdmin(true);
    },
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