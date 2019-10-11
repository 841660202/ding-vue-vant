<!--
 * @version: v0.0.1
 * @Author: hailong.chen
 * @Date: 2019-10-11 15:37:13
 * @LastEditors: hailong.chen
 * @LastEditTime: 2019-10-11 16:28:51
 * @Descripttion:
 -->
<template>
  <div>
    <van-tabs type="card">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
    </van-tabs>
     <van-tabbar v-model="active" safe-area-inset-bottom>
      <van-tabbar-item icon="home-o" replace to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" dot replace to="/page2">消息</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5" replace to="/page3">工作</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20" replace to="/page4">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'page2',
  components: {
    // HelloWorld,
  },
  data() {
    return {
      active: 1,

    };
  },
};
</script>
