<template>
  <div class="wrapper">
    <header-component />

    <main class="page">
      <router-view />
    </main>

    <footer-component />
  </div>
</template>

<script>
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue';
  import { check } from '@/http/userAPI';
  import { mapMutations, mapActions } from 'vuex';

  export default {
    components: { 
      HeaderComponent, 
      FooterComponent 
    },
    methods: {
      ...mapMutations({
        setIsAuth: 'auth/setIsAuth',
        setUser: 'auth/setUser',
      }),
      ...mapActions({
        getDevicesTopAction: 'shop/getDevicesTopAction',
      }),
    },
    mounted() {
      check().then(data => {
        this.setIsAuth(true);
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