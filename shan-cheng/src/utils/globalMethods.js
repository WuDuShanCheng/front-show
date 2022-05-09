/**
 * @Description
 * @author  ZhiHao
 * @date  2022/4/24 8:43
 */
export default {
  install: function (Vue) {
    /*
    * 生成随机数 (num 位随机数 + 时间戳)
    * */
    Object.defineProperty(Vue.prototype, '$getRandomCode', {
      value: function getRandomCode(num = 8) {
        let data = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        let nums = "";
        let timestamp = parseInt(new Date().getTime() / 1000) + ''
        for (let i = 0; i < num; i++) {
          let r = parseInt(Math.random() * 61);
          nums += data[r];
        }
        return timestamp + nums;
      }
    })

    /*
    * 时间戳转换
    * */
    Object.defineProperty(Vue.prototype, '$getdate', {
      value: function getRandomCode(date) {
        let now = new Date(date),
          y = now.getFullYear(),
          m = now.getMonth() + 1,
          d = now.getDate();
        return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d);
      }
    })
  }
}
