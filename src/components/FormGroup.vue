<template>
  <label
    :class="[
      'form-group',
      `form-group--size-${size}`,
      color ? `form-group--color-${color}` : '',
      error ? 'form-group--has-error' : '',
      iconRight ? 'form-group--icon-right' : '',
      hasIcon ? 'form-group--has-icon' : '',
    ]"
  >
    <span class="form-group__label">{{ label }}</span>
    <div class="form-group__input-container">
      <slot name="icon" />
      <slot></slot>
    </div>
    <small v-if="help" class="form-group__help">{{ help }}</small>
  </label>
</template>

<script>
export default {
  name: "FormGroup",
  props: {
    label: {
      type: String,
      required: true,
    },
    help: {
      type: String,
      required: false,
    },
    iconRight: {
      type: Boolean,
      required: false,
    },
    error: {
      type: Boolean,
      required: false,
    },
    size: {
      type: String,
      required: false,
      default: "md",
      validator: function (value) {
        return ["sm", "md", "lg"].indexOf(value) !== -1;
      },
    },
    color: {
      type: String,
      required: false,
      validator: function (value) {
        return ["primary", "tetriary"].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    hasIcon() {
      return !!this.$slots.icon;
    },
  },
};
</script>

<style lang="scss">
@import "../style/components/forms";
</style>
