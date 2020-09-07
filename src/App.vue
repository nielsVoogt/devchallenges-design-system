<template>
  <div class="design-system">
    <div class="design-system__navigation">
      <DevChallengesLogo />
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
import DevChallengesLogo from "@/components/DevChallengesLogo.vue";

export default {
  components: {
    DevChallengesLogo,
  },
};
</script>

<style lang="scss">
// ------- BASE STYLES
@import "./style/base/reset";
@import "./style/base/fonts";
@import "./style/base/type";
@import "./style/base/base";

// ------- LAYOUT
@import "./style/layout/layout";
</style>
