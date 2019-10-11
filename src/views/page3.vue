<!--
 * @version: v0.0.1
 * @Author: hailong.chen
 * @Date: 2019-10-11 15:37:19
 * @LastEditors: hailong.chen
 * @LastEditTime: 2019-10-11 16:34:28
 * @Descripttion:
 -->
<template>
  <div>
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    >
      <div slot="tags">
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </div>
      <div slot="footer">
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </div>
    </van-card>

     <van-tabbar v-model="active" safe-area-inset-bottom>
      <van-tabbar-item icon="home-o" replace to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" dot replace to="/page2">消息</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5" replace to="/page3">工作</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20" replace to="/page4">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
};

export default {
  data() {
    return {
      chosenCoupon: -1,
      active: 2,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false,
    };
  },

  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
  },
};
</script>
