<template>
  <label
    :class="[
      'form-group',
      errorText ? 'form-group--has-error' : '',
      iconRight ? 'form-group--icon-right' : '',
      hasIcon ? 'form-group--has-icon' : '',
    ]"
  >
    <span class="form-group__label">{{ label }}</span>
    <div class="form-group__input-container">
      <slot name="icon" />
      <slot></slot>
    </div>
    <small v-if="helpText" class="form-group__help-text">{{ helpText }}</small>
    <small v-if="errorText" class="form-group__error-text">{{
      errorText
    }}</small>
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
    helpText: {
      type: String,
      required: false,
    },
    iconRight: {
      type: Boolean,
      required: false,
    },
    errorText: {
      type: String,
      required: false,
    },
  },
  computed: {
    hasIcon() {
      return !!this.$slots.icon;
    },
  },
};

// User story: I can still access all input attributes
// User story: I can see error state
// User story: I can choose to disable input
// User story: I can choose to have helper text
// User story: I can choose to have an icon on the left or right (Use Google Icon and at least 5 variants)
// User story: I can have different input sizes
// User story: I can have different colors
// User story: I can choose to have input take the width of the parent
// User story: I can have multiline input like a textarea
// User story: When I hover or focus, I can see visual indicators
</script>

<style lang="scss">
// -------- INPUT STYLES
input {
  &[type="text"],
  &[type="password"],
  &[type="number"],
  &[type="search"],
  &[type="email"] {
    border: 1px solid #828282;
    border-radius: 8px;
    padding: 1em;
    outline: none;
    font: inherit;
    color: #333333;

    &:hover {
      border-color: #333333;
    }

    &:focus {
      border-color: #2962ff;
    }

    &::-webkit-input-placeholder {
      color: #828282;
    }

    &:-ms-input-placeholder {
      color: #828282;
    }

    &::placeholder {
      color: #828282;
    }

    &[disabled] {
      background: #f2f2f2;
      border: 1px solid #e0e0e0;
    }
  }
}

// -------- FORM GROUP STYLES

.form-group {
  width: 30em;
  font-size: 0.875rem;

  &__label {
    font-weight: 500;
    margin-bottom: 0.5em;
    display: block;
  }

  &__input-container {
    position: relative;
    font-size: 0.875rem;

    .material-design-icon {
      position: absolute;
      top: 50%;
      left: 1em;
      transform: translateY(-50%);
      width: 1.5em;
      height: 1.5em;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  &--has-icon {
    input {
      &[type="text"],
      &[type="password"],
      &[type="number"],
      &[type="search"],
      &[type="email"] {
        padding-left: 3em;
      }
    }
  }

  &__help-text {
    font-size: 0.75rem;
    color: #828282;
  }

  &__error-text {
    font-size: 0.75rem;
    color: #d32f2f;
  }

  &--has-error {
    input {
      border: 1px solid #d32f2f;
    }
  }
}
</style>
