<template>
  <div id="nav">
    <router-link to="/">Blog</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $grey;
}

#nav {
  padding: 1rem;
  text-align: center;

  a {
    font-weight: bold;
    color: $grey;

    &.router-link-exact-active {
      color: $green;
    }
  }
}
</style>
