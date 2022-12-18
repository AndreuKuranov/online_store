<template>
  <select 
    class="select-admin"
    @change="changeOption"
    :value="modelValue"
  >
    <option disabled value="">{{ defaultOptionText }}</option>
    <option
      v-for="option in options"
      :key="option.id"
      :value="option.id"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
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
    },
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  },
}
</script>

<style scoped>
.select-admin {
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  border: 1px solid var(--dark-color);
  border-radius: var(--small-border-radius);
}
</style>