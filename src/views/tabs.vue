<!--
 * @version: v0.0.1
 * @Author: hailong.chen
 * @Date: 2019-10-11 15:39:17
 * @LastEditors: hailong.chen
 * @LastEditTime: 2019-10-11 15:46:17
 * @Descripttion:
 -->
<template>
  <van-tabbar route safe-area-inset-bottom>
  <van-tabbar-item

    to="/page1"
    icon="home-o"
  >
    页面1
  </van-tabbar-item>
  <van-tabbar-item

    to="/page2"
    icon="search"
  >
    页面2
  </van-tabbar-item>
  <van-tabbar-item
    replace
    to="/page3"
    icon="search"
  >
    页面3
  </van-tabbar-item>
</van-tabbar>
</template>
