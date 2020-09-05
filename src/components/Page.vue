<template>
  <article>
    <header>
      <h1>{{ title }}</h1>
    </header>
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

