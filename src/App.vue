<template>
  <div class="design-system">
    <div class="design-system__navigation">
      <span class="logo" />
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

<style lang="scss">
@import "./style/base/base";
@import "./style/layout/layout";
</style>
