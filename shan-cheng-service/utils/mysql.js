/**
 * @Description
 * @author  ZhiHao
 * @date  2022/4/21 7:54
 */
const config = require('../config')
// 初始化数据库
const mysqldb = require('ali-mysql-client');
const db = new mysqldb(config);
module.exports = db
