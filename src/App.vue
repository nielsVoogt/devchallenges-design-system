<template>
  <div class="design-system">
    <nav class="design-system__navigation">
      <router-link to="/">Buttons</router-link>|
      <router-link to="/inputs">Inputs</router-link>
    </nav>
    <main class="design-system__content">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
@import "./style/base/reset";
@import "./style/base/fonts";
@import "./style/base/type";
@import "./style/base/base";
@import "./style/layout/layout";
</style>
