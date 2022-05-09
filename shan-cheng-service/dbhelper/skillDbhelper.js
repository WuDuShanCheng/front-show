/**
 * @Description
 * @author  ZhiHao
 * @date  2022/4/21 14:53
 */
const mysqldb = require('../utils/mysql')
const helper = {
  //查询所有的技能
  findAll: (params) => {
    return new Promise((resolve, reject) => {
      resolve(mysqldb.select('*').from('skill').queryList())
    })
  },
  //查询指定项目id下的技能
  findSkiById: (params) => {
    return new Promise((resolve, reject) => {
      resolve(mysqldb.select('*').from('skill').where('proId', params.id).queryList())
    })
  },
  //保存指定项目id下的技能
  insertSki: (params) => {
    return new Promise((resolve, reject) => {
      if (Array.isArray(params)&&params.length==0){
        resolve()
      }else{
        mysqldb.insert('skill', params).execute()
      }
      resolve()
    })
  },
  //删除指定项目id下的技能
  deleteSki: (params) => {
    return new Promise((resolve, reject) => {
      mysqldb.delete('skill').where('proId', params.proId).execute();
      resolve()
    })
  }
}
module.exports = helper
