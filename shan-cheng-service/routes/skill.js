/**
 * @Description
 * @author  ZhiHao
 * @date  2022/4/21 21:04
 */
const Router = require('koa-router')
const helper = require('../dbhelper/skillDbhelper')

const router = new Router()

router.prefix('/skill')
// 查询所有的技能
router.post('/getByList', async (ctx, next) => {
  let data = await helper.findAll()
  ctx.body = {
    list: data,
    messsage: '查询成功',
    status: '10000'
  }
  await next()
})

// 查询指定项目id下的技能
router.post('/getSkiById', async (ctx, next) => {
  let data = await helper.findSkiById(ctx.request.body)
  ctx.body = {
    list: data,
    messsage: '查询成功',
    status: '10000'
  }
  await next()
})

// 删除指定项目id下的技能
router.post('/deleteSki', async (ctx, next) => {
  let data = await helper.deleteSki(ctx.request.body)
  ctx.body = {
    list: data,
    messsage: '删除成功',
    status: '10000'
  }
  await next()
})

// 增加指定项目id下的技能
router.post('/insertSki', async (ctx, next) => {
  let data = await helper.insertSki(ctx.request.body)
  ctx.body = {
    list: data,
    messsage: '增加成功',
    status: '10000'
  }
  await next()
})

module.exports = router
