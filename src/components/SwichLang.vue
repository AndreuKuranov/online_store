<template>
  <my-button 
    class=""
    @click="swichLang"
  >
    {{ textBtn }}
  </my-button>
</template>

<script>
  export default {
    computed: {
      textBtn() {
        let text = '';

        if (this.$i18n.locale === 'ru') {
          text = 'EN'
        } else if (this.$i18n.locale = 'en') {
          text = 'RU'
        }

        return text;
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

</style>