<template>
  <select 
    :class="classCheck"
    @change="changeOption"
    :value="modelValue"
  >
    <option disabled value="">{{defaultOptionText}}</option>
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
    },
    admin: {
      type: Boolean,
      required: false,
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  },
  computed: {
    classCheck() {
      return this.admin ? 'select-admin' : 'select'
    }
  }
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