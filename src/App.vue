<template>
  <!--<nav>-->
    <!--<router-link to="/">Home</router-link> |-->
    <!--<router-link to="/about">About</router-link>-->
  <!--</nav>-->
  <router-view />
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
html, body, #app{
  height: 100%;
  overflow: hidden;
}
::-webkit-scrollbar {
  display: none;
}
#app {

}
</style>
