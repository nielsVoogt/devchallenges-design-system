<template>
  <div class="design-system">
    <div class="design-system__navigation">
      <DevChallenges />
      <nav>
        <router-link to="/">Buttons</router-link>
        <router-link to="/inputs">Inputs</router-link>
      </nav>
    </div>
    <main class="design-system__content">
      <router-view />
    </main>
  </div>
</template>

<script>
import DevChallenges from "@/components/DevChallenges.vue";

export default {
  components: {
    DevChallenges,
  },
};
</script>

<style lang="scss">
@import "./style/base/reset";
@import "./style/base/fonts";
@import "./style/base/type";
@import "./style/base/base";
@import "./style/layout/layout";
</style>
