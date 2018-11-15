// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { post, fetch } from "./util/http.js";
// import axios from '../../node_modules/axios/dist/axios'
// import { post, fetch } from "./util/http";

Vue.config.productionTip = false;
Vue.prototype.axios = axios;

// 路由跳转全局可调用
Vue.prototype.$goRoute = function (url) {
  this.$router.push(url)
}

axios.defaults.baseURL = 'https://douban.uieee.com';

Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

import qs from "qs"


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 参数格式转换
  if (config.method == "post") {
    config.data = qs.stringify(config.data);
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
