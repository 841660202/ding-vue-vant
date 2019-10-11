<!--
 * @version: v0.0.1
 * @Author: hailong.chen
 * @Date: 2019-10-11 15:37:19
 * @LastEditors: hailong.chen
 * @LastEditTime: 2019-10-11 16:33:04
 * @Descripttion:
 -->
<template>
  <div>
    <van-row type="flex" justify="center">
      <van-image
        round
        width="6rem"
        height="6rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </van-row>
    <!-- 优惠券单元格 -->
    <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
    />

    <!-- 优惠券列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>

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
      active: 3,
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
