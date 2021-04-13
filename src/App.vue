<template>
  <div id="app">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './style/main.css';
#app{
  height: 100%;
}
</style>
