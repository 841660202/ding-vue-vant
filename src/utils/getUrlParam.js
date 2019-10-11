/**
 * @version: v0.0.1
 * @Author: hailong.chen
 * @Date: 2019-10-11 19:44:30
 * @LastEditors: hailong.chen
 * @LastEditTime: 2019-10-11 19:44:50
 * @Descripttion:
 */
export default function getUrlParam(name) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}
