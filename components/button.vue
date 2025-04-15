<template>
  <button :class="classes" v-bind="additionalProps">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    buttonStyle: {
      type: String,
      default: 'primary',
      validator: (value) => {
        return ['primary', 'secondary'].includes(value);
      }
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    additionalProps() {
      const { buttonStyle, className, ...rest } = this.$props;
      return rest;
    },
    classes() {
      return [
        'flex rounded-full text-sm px-6 py-2.5 font-medium',
        this.buttonStyle === 'primary' ? 'bg-primary-600 hover:bg-primary-700 text-white' : '',
        this.buttonStyle === 'secondary' ? 'bg-white hover:bg-gray-50 text-secondary-700' : '',
        this.className
      ].join(' ').trim();
    }
  }
}
</script>