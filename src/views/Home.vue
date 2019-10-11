<!--
 * @version: v0.0.1
 * @Author: hailong.chen
 * @Date: 2019-10-11 12:44:15
 * @LastEditors: hailong.chen
 * @LastEditTime: 2019-10-11 20:14:52
 * @Descripttion:
 -->
<template>
  <div class="home">

      <van-swipe :autoplay="3000" :height="200">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" style="height:200px" />
      </van-swipe-item>
    </van-swipe>

    <van-notice-bar
      color="#1989fa"
      background="#ecf9ff"
      left-icon="info-o"
    >
      通知内容、 通知内容、 通知内容、 通知内容、 通知内容、 通知内容、 通知内容、 通知内容、
    </van-notice-bar>
    <van-grid :gutter="10">
      <van-grid-item
        v-for="value in 8"
        :key="value"
        icon="label"
        text="文字"
      />
    </van-grid>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <van-tabbar v-model="active" safe-area-inset-bottom>
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search" dot replace to="/page2">消息</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5" replace to="/page3">工作</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20" replace to="/page4">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import dd from 'dingtalk-jsapi';
import getUrlParam from '../utils/getUrlParam';

dd.ready(() => {
  const corpId = getUrlParam('corpId');
  alert(corpId);
  // dd.ready参数为回调函数，在环境准备就绪时触发，jsapi的调用需要保证在该回调函数触发后调用，否则无效。
  dd.runtime.permission.requestAuthCode({
    // corpId: 'dingcb38c848d8b61c7c35c2f4657eb6378f',
    corpId,
    onSuccess(result) {
      alert(JSON.stringify(result));
      /* {
            code: 'hYLK98jkf0m' //string authCode
        } */
    },
    onFail(err) {
      alert(JSON.stringify(err));
    },

  });
});
export default {
  name: 'home',
  components: {
    // HelloWorld,
  },
  data() {
    return {
      active: 0,
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
    };
  },
};
</script>
