<template>
  <div id="app">
    <div id="nav">
      <b-navbar id="b-navbar">
        <router-link to="/" id="router-link">Matt Reid</router-link>
        <router-link :to="{ name: 'contacts' }" id="router-link">Contact</router-link>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "./styling/main.scss";

// html,
// body {
//   height: 100vh;
//   width: 100vw;
//   margin: 0;
// }

// #app {
//   height: inherit;
//   width: inherit;
// }
</style>
