/**
 * @Description
 * @author  ZhiHao
 * @date  2022/4/24 15:39
 */
const Router = require('koa-router')
const multer = require('koa-multer');
const router = new Router()
const config = require('../serviceConfig')
const { join } = require('path')

//文件上传
var storage = multer.diskStorage({
  //文件保存路径
  destination:  join(process.cwd(), "public/img"),
  //修改文件名称
  filename: function (req, file, cb) {
    var fileFormat = (file.originalname).split(".");
    cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})

//加载配置
var upload = multer({ storage: storage });

//路由
router.post('/upload', upload.single('file'), async (ctx, next) => {
  ctx.body = {
    data: `${config.serviceApi}/img/${ctx.req.file.filename}`,
    status: '10000',
    message: "请求成功",
  }
  ctx.status = 200
})


module.exports = router
