/**
 * @Description
 * @author  ZhiHao
 * @date  2022/4/21 14:53
 */
const mysqldb = require('../utils/mysql')
const helper = {
  //查询所有的技能
  findAllByType: (params) => {
    return new Promise((resolve, reject) => {
      resolve(mysqldb.select('*').from('icon').where('type',params.type).queryList())
    })
  },
}
module.exports = helper
