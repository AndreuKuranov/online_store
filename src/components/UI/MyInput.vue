<template>
  <input
    :value="modelValue"
    @input="updateInput"
    class="form-input"
    type="text"
  />
</template>

<script>
  export default {
    name: 'my-input',
    props: {
      modelValue: [String, Number]
    },
    methods: {
      updateInput(event) {
        this.$emit('update:modelValue', event.target.value)
      }
    }
  }
</script>

<style lang="scss" scoped>
.form-input {
  box-sizing: border-box;
  width: 100%;
  padding: px2rem(18px) px2rem(10px);
  border: 1px solid $darkColor;
  border-radius: px2rem($smallBorderRadius);
}
</style>