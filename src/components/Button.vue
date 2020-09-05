<template>
  <button>
    Hello world
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    msg: String,
  },
};

// User story: I can see different button types: default, outline and text
// User story: I can choose to disable box-shadow
// User story: I can choose to disable button
// User story: I can choose to have an icon on the left or right (Use Google Icon and at least 5 variants)
// User story:: I can have different button sizes
// User story: I can have different colors
// User story: When I hover or focus, I can see visual indicators
// User story: I can still access all button attributes
// User story (optional): Show button in a similar way like the design or use Storybook. Otherwise, showing the button in multiple states is enough
</script>

<style scoped lang="scss"></style>
