/**
 * @Description
 * @author  ZhiHao
 * @date  2022/4/21 21:04
 */
const Router = require('koa-router')
const helper = require('../dbhelper/iconDbhelper')

const router = new Router()

router.prefix('/icon')
// 查询所有的技能
router.post('/getByList', async (ctx, next) => {
  let data = await helper.findAllByType(ctx.request.body)
  ctx.body = {
    list: data,
    messsage: '查询成功',
    status: '10000'
  }
  await next()
})

module.exports = router
