import Vue from 'vue'
import App from './App.vue'
import router from "@/router";

//Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// 适配文件,移动端(小于540px)才进行适配
import '@/utils/adapter.js'

//引入scss 改变body,html等
import '@/scss/index.scss'

//引入图标
import '@/scss/iconfont/iconfont'

// 全局方法注册
import globalMethods from '@/utils/globalMethods'
Vue.use(globalMethods)

//引入动画库
import animated from 'animate.css'
Vue.use(animated)

//引入全局指令
import "@/utils/globalDirective"

//request封装
import request from '@/utils/request'
import Imgpond from 'imgpond'
Vue.use(Imgpond, {
  request,
  url: process.env.VUE_APP_BASE_API + 'upload',
  poweredBy: 'element'
})

// lodash
import _ from 'lodash';
Vue.prototype._ = _

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
