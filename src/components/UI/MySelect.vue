<template>
  <select 
    class="select"
    @change="changeOption"
    :value="modelValue"
  >
    <option disabled value="">{{defaultOptionText}}</option>
    <option
      v-for="option in options"
      :key="option.id"
      :value="option.name"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    defaultOptionText: {
      type: String
    },
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>
</style>