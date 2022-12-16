<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__body">
        <div class="footer__item">{{ $t('address') }}</div>
        <my-button 
          class=""
          @click="swichLang"
        >
          swich lang
        </my-button>
        <div class="footer__item">{{ $t('copyright') }}</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    swichLang() {
      this.$i18n.locale === 'ru' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'ru';
      localStorage.setItem('lang', this.$i18n.locale)
    }
  }
}
</script>

<style lang="scss">
.footer {
  background-color: var(--base-bg-color);

  &__container {

  }

  &__body {
    min-height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include min-width-xs {
      min-height: 76px;
    }

    @include min-width-md {
      min-height: 86px;
    }
  }

  &__item {
    font-size: var(--small-font-size);
  }
}
</style>