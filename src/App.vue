<!--
 * @version: v0.0.1
 * @Author: hailong.chen
 * @Date: 2019-10-11 12:44:15
 * @LastEditors: hailong.chen
 * @LastEditTime: 2019-10-11 15:50:47
 * @Descripttion:
 -->
<template>
  <!-- <div id="app"> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/tabs">tabs</router-link>
    </div> -->
    <!-- <van-number-keyboard safe-area-inset-bottom /> -->
    <router-view/>
  <!-- </div> -->
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
