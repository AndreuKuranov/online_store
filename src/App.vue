<template>
  <div class="wrapper">
    <header-component />

    <main class="page">
      <router-view />
    </main>

    <footer-component />

    <ModalDeleteElement />
    <ModalOrderingForm />
  </div>
</template>

<script>
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue';
  import ModalDeleteElement from '@/components/ModalDeleteElement.vue';
  import ModalOrderingForm from '@/components/ModalOrderingForm.vue';
  import { checkUserToken } from '@/http/userAPI';
  import { mapMutations, mapActions } from 'vuex';

  export default {
    components: { 
      HeaderComponent, 
      FooterComponent,
      ModalDeleteElement,
      ModalOrderingForm,
    },
    methods: {
      ...mapMutations({
        setUser: 'auth/setUser',
      }),
      ...mapActions({
        getDevicesTopAction: 'shop/getDevicesTopAction',
      }),
    },
    mounted() {
      checkUserToken().then(data => {
        this.setUser(data);
      })

      // временно, пока не реализую рейтинг
      this.getDevicesTopAction({
        typeId: null, 
        brandId: null, 
        page: 1, 
        limit: 4
      });
      // -----------------------------------
    }
  }
</script>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
}

.page {
  flex: 1 1 auto;
}

.link--active {
  text-shadow: 3px 3px 5px rgba(var(--dark-color-rgb));
}
</style>