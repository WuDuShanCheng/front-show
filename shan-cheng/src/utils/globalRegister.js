import Vue from 'vue'

/*
require.context函数接受三个参数
directory {String} -读取文件的路径
useSubdirectories {Boolean} -是否遍历文件的子目录
regExp {RegExp} -匹配文件的正则
* */

//注册所有全局组件
register(require.context('@/components', true, /.vue/))

//注册包中的组件
function register(context) {
  context.keys().forEach(cnt => {
    let component = context(cnt)
    let ctrl = component.default || component
    let a = ctrl.name
    let b = ctrl
    //注册组件 名字 组件
    Vue.component(a, b)
  })
}