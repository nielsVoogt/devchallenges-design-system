<template>
  <article>
    <header>{{ title }}</header>
    <slot />
    <footer>Niels Voogt @ DevChallenges.io</footer>
  </article>
</template>

<script>
export default {
  name: "Page",
  props: ["title"],
};
</script>

<style></style>
