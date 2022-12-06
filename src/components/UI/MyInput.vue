<template>
  <input
    :value="modelValue"
    @input="updateInput"
    :class="classCheck"
    type="text"
  />
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number],
    admin: {
      type: Boolean,
      required: false,
    }
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  },
  computed: {
    classCheck() {
      return this.admin ? 'input-admin' : 'input'
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  box-sizing: border-box;
  width: 100%;
  padding: 14px 6px;
  border: 1px solid var(--dark-color);
  border-radius: var(--small-border-radius);

  @include min-width-md {
    padding: 18px 10px;
  }
}

.input-admin {
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  border: 1px solid var(--dark-color);
  border-radius: var(--small-border-radius);

  &--file {
    border: none;
    padding: 0;
  }
}
</style>