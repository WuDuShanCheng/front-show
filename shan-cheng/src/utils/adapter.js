//用于屏幕适配
(()=>{
  //测量宽度
  let clientWidth = document.documentElement.clientWidth > 540 ? 375 :document.documentElement.clientWidth
  //设置rem对应的数值
  document.documentElement.style.fontSize = clientWidth /10 +'px'

  console.log('屏幕宽度:' + document.documentElement.style.fontSize);
  console.log('html字体大小设置:' + document.documentElement.style.fontSize);
})();