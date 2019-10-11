<!--
 * @version: v0.0.1
 * @Author: hailong.chen
 * @Date: 2019-10-11 12:44:15
 * @LastEditors: hailong.chen
 * @LastEditTime: 2019-10-11 15:29:17
 * @Descripttion:
 -->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-cell-group>
  <van-field
    v-model="username"
    required
    clearable
    label="用户名"
    right-icon="question-o"
    placeholder="请输入用户名"
    @click-right-icon="$toast('question')"
  />

  <van-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
    required
  />
</van-cell-group>
    <!-- <van-button type="default">默认按钮</van-button> -->
    <van-button type="primary">主要按钮</van-button>
    <!-- <van-button type="info">信息按钮</van-button> -->
    <!-- <van-button type="warning">警告按钮</van-button> -->
    <!-- <van-button type="danger">危险按钮</van-button> -->
    <van-number-keyboard safe-area-inset-bottom />
  </div>
</template>
