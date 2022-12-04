<!-- <template>
  <div class="page__admin admin">
    <div class="admin__container container">
      <ul class="admin__list">
        <li 
          class="admin__item"
          v-for="item in modelBtn"
          :key="item.id"
        >
          <my-button
            class="admin__btn"
            type="button"
            @click="modalComponents(item.id)"
          >
            {{ item.name }}
          </my-button>
        </li>
      </ul>
      <my-modal 
        v-model:stateModal="modalVisible"
      >
        <TypeCreate v-if="componentVisible === modelBtn[0].id" />
        <BrandCreate v-if="componentVisible === modelBtn[1].id" />
        <ProductCreate v-if="componentVisible === modelBtn[2].id" />
      </my-modal>
    </div>
  </div>
</template>

<script>
  import TypeCreate from '@/components/TypeCreate.vue';
  import BrandCreate from '@/components/BrandCreate.vue'; 
  import ProductCreate from '@/components/ProductCreate.vue'; 

  export default {
    components: {
      TypeCreate,
      BrandCreate,
      ProductCreate,
    },
    data() {
      return {
        modalVisible: false,
        componentVisible: '',
        modelBtn: [
          { id: 'type', name: 'Добавить тип' },
          { id: 'brand', name: 'Добавить бренд' },
          { id: 'product', name: 'Добавить продукт' },
        ]
      }
    },
    methods: {
      modalComponents(id) {
        this.componentVisible = id;
        this.modalVisible = true;
      },
      // setModalVisible(val) {
      //   this.modalVisible = val;
      // }
    }
  }
</script>

<style lang="scss">
.admin {
  margin: 30px 0 0 0;

  &__container {

  }

  &__list {
    @extend %list;
    display: grid;
    gap: 20px;
  }

  &__item {

  }

  &__btn {

  }
}
</style> -->

<template>
  <div class="page__admin admin">
    <div class="admin__container container">
      <div class="admin__body">
        <div class="admin__navbar navbar-admin">
          <ul class="navbar-admin__list">
            <li 
              class="navbar-admin__item"
              v-for="item in navList"
              :key="item.id"
            >
              <router-link
                class="navbar-admin__link"
                :to="`/admin/${item.id}`"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <div class="admin__page page-admin">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {

    },
    data() {
      return {
        navList: [
          { id: 'type', name: 'Типы' },
          { id: 'brand', name: 'Бренды' },
          { id: 'product', name: 'Продукты' },
        ]
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss">
.admin {
  margin: 30px 0 0 0;

  &__container {

  }

  &__body {
    display: grid;
    gap: 20px;
    grid-template-columns: 180px 1fr;
  }

  &__navbar {

  }

  &__page {

  }
}

.navbar-admin {

  &__list {
    @extend %list;
  }

  &__item {

  }

  &__link {

  }
}

.page-admin {

}
</style>