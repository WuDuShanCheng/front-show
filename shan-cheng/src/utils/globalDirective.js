/**
 * @Description
 * @author  ZhiHao
 * @date  2022/5/17 17:34
 */
import Vue from 'vue'
Vue.directive('debounce', {
  // 指令第一次绑定到元素时
  // eslint-disable-next-line no-unused-vars
  bind: function(el, binding, vnode) {
    let wait = binding.value; // 防抖时间
    if (!wait) { // 用户若不设置防抖时间，则默认2s
      wait = 2000;
    }
    let timer;
    el.addEventListener('click', event => {
      if (!timer) { // 第一次执行: 不阻止click⌚️
        timer = setTimeout(() => {
          timer = null;
        }, wait);
      } else {
        clearTimeout(timer)
        timer = setTimeout(() => {
          timer = null;
        }, wait);
        event && event.stopImmediatePropagation();
      }
    }, true);
  }
})
