/**
 * @Description
 * @author  ZhiHao
 * @date  2022/4/21 14:53
 */
const mysqldb = require('../utils/mysql')
const helper = {
  //查询该用户所有的id
  findAll: (params) => {
    return new Promise((resolve, reject) => {
      resolve(mysqldb.select('*').from('project').queryList())
    })
  },

  //查询该用户所有的id
  findAllType: (params) => {
    return new Promise((resolve, reject) => {
      resolve(mysqldb.select('*').from('project_type').queryList())
    })
  },

  //查询该用户所有的id
  findProById: (params) => {
    return new Promise((resolve, reject) => {
      resolve(mysqldb.select('*').from('project').where('id', params.id).queryRow())
    })
  },

  //替换图片和文字
  updateProById: (params) => {
    return new Promise((resolve, reject) => {
      mysqldb.update('project',
        {
          name: params.name,
          date: params.date,
          text: params.text,
          url: params.url,
          typeId: params.typeId,
          rate: params.rate,
          icon: params.icon,
          images: params.images,
        }
      ).where('id', params.proId).execute()
      resolve()
    })
  },

  insertPro: (params) => {
    return new Promise((resolve, reject) => {
      mysqldb.insert('project', params).execute()
      resolve()
    })
  },

  //删除指定项目id下的技能
  deletePro: (params) => {
    return new Promise((resolve, reject) => {
      mysqldb.delete('skill').where('proId', params.id).execute();
      mysqldb.delete('project').where('id', params.id).execute();
      resolve()
    })
  }
}
module.exports = helper
