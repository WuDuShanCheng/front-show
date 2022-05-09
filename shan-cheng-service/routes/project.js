/**
 * @Description
 * @author  ZhiHao
 * @date  2022/4/21 15:10
 */
const Router = require('koa-router')
const helper = require('../dbhelper/projectDbhelper')

const router = new Router()

router.prefix('/project')
// 查询所有项目
router.post('/getByList', async (ctx, next) => {
  let data = await helper.findAll()
  ctx.body = {
    list: data,
    messsage: '查询成功',
    status: '10000'
  }
  await next()
})

//查询所有项目分类
router.post('/type/getByList', async (ctx, next) => {
  let data = await helper.findAllType()
  ctx.body = {
    list: data,
    messsage: '查询成功',
    status: '10000'
  }
  await next()
})


//查询单个项目
router.post('/findProById', async (ctx, next) => {
  let data = await helper.findProById(ctx.request.body)
  ctx.body = {
    list: data,
    messsage: '查询成功',
    status: '10000'
  }
  await next()
})

//更新单个项目
router.post('/updateProById', async (ctx, next) => {
  let data = await helper.updateProById(ctx.request.body)
  ctx.body = {
    list: data,
    messsage: '查询成功',
    status: '10000'
  }
  await next()
})

//更新单个项目
router.post('/insertPro', async (ctx, next) => {
  let data = await helper.insertPro(ctx.request.body)
  ctx.body = {
    list: data,
    messsage: '插入成功',
    status: '10000'
  }
  await next()
})

//删除单个项目
router.post('/deletePro', async (ctx, next) => {
  let data = await helper.deletePro(ctx.request.body)
  ctx.body = {
    list: data,
    messsage: '删除成功',
    status: '10000'
  }
  await next()
})

module.exports = router
