/**
 * @Description
 * @author  ZhiHao
 * @date  2022/4/21 6:56
 */
let config = {
  mysql: { // 数据库存连接配置
    // host
    host: '127.0.0.1',
    // 端口号
    port: '3306',
    // 用户名
    user: 'root',
    // 密码
    password: '123456',
    // 数据库名
    database: 'shan_cheng',
  },
  config: config => { // 数据库工具配置
    // 自定义operator
    config.registerOperator('ne', ({field, value}) => {
      return {sql: '?? <> ?', arg: [field, value]};
    });

    // 自定义ignore
    config.registerIgnore('ifNumber', ({value}) => {
      return !isNaN(Number(value));
    });

    // 监听事件 执行前
    config.onBeforeExecute(function ({sql}) {
      console.log(sql);
    });

    // 监听事件 执行后
    config.onAfterExecute(function ({sql, result}) {
      console.log(result);
    });

    // 监听事件 执行出错
    config.onExecuteError(function ({sql, error}) {
      console.log(error);
    });
  },
};


module.exports = config
