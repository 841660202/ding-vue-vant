<!--
 * @version: v0.0.1
 * @Author: hailong.chen
 * @Date: 2019-10-11 15:37:02
 * @LastEditors: hailong.chen
 * @LastEditTime: 2019-10-11 16:28:59
 * @Descripttion:
 -->
<template>
  <div>

    <van-tabbar v-model="active" safe-area-inset-bottom>
        <van-tabbar-item icon="home-o" replace to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="search" dot replace to="/page2">消息</van-tabbar-item>
        <van-tabbar-item icon="friends-o" info="5" replace to="/page3">工作</van-tabbar-item>
        <van-tabbar-item icon="setting-o" info="20" replace to="/page4">我的</van-tabbar-item>
      </van-tabbar>
  </div>
</template>
