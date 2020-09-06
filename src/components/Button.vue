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
    <slot>Button</slot>
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
      validator: function(value) {
        return ["sm", "md", "lg"].indexOf(value) !== -1;
      },
    },
    variant: {
      type: String,
      required: false,
      default: "default",
      validator: function(value) {
        return ["default", "outline", "text"].indexOf(value) !== -1;
      },
    },
    color: {
      type: String,
      required: false,
      default: "default",
      validator: function(value) {
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

// User story: I can have different colors
// User story: I can choose to disable button
// User story: I can see different button types: default, outline and text
// User story: I can choose to disable box-shadow
// User story: I can have different button sizes
// User story: I can still access all button attributes

// User story: I can choose to have an icon on the left or right (Use Google Icon and at least 5 variants)
// User story: When I hover or focus, I can see visual indicators
// User story (optional): Show button in a similar way like the design or use Storybook. Otherwise, showing the button in multiple states is enough
</script>

<style scoped lang="scss">
// ----------- BUTTON RESET

button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-appearance: none;
}

// ----------- BUTTON STYLES

.btn {
  background: #e0e0e0;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  border-radius: 0.375em;
  padding: 0 1em;
  line-height: 2.5em;

  // -------------- SIZES

  &--size {
    &-sm {
      font-size: 0.75rem;
    }
    &-md {
      font-size: 0.875rem;
    }
    &-lg {
      font-size: 1.125rem;
    }
  }

  // -------------- NO SHADOW

  &--no-shadow {
    box-shadow: none;
  }
}
</style>
