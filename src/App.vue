<template>
  <nav>
    <router-link to="/repa2/">Home</router-link> |
    <router-link to="/repa2/about">About</router-link> |
    <router-link to="/repa2/chat">Chat</router-link> |
    <router-link to="/repa2/objects">Objects</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script setup>
</script>
