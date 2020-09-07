<template>
  <button
    :class="[
      'btn',
      `btn--variant-${variant}`,
      `btn--size-${size}`,
      `btn--color-${color}`,
      disableShadow ? 'btn--no-shadow' : '',
    ]"
    v-bind="{ ...$attrs }"
    @click="handleClick"
  >
    <slot name="icon-left"></slot>
    <span>
      <slot>Click me</slot>
    </span>
    <slot name="icon-right"></slot>
  </button>
</template>

<script>
export default {
  inheritAttrs: true,
  name: "Button",
  props: {
    size: {
      type: String,
      required: false,
      default: "md",
      validator: function (value) {
        return ["sm", "md", "lg"].indexOf(value) !== -1;
      },
    },
    variant: {
      type: String,
      required: false,
      default: "default",
      validator: function (value) {
        return ["default", "outline", "text"].indexOf(value) !== -1;
      },
    },
    color: {
      type: String,
      required: false,
      default: "default",
      validator: function (value) {
        return (
          ["default", "primary", "secondary", "danger"].indexOf(value) !== -1
        );
      },
    },
    disableShadow: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit("clicked");
    },
  },
};
</script>

<style lang="scss">
@import "../style/components/button";
</style>
