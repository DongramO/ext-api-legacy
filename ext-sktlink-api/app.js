const Koa = require('koa')
const middlewares = require('koa-middlewares')
const res = require('./src')
const Router = require('koa-router')
const helmet = require('koa-helmet')

const router = new Router()
const app = new Koa()

// router.routes() => 요청과 일치하는 경로로 미들웨어를 반환합니다.
app.use(middlewares.bodyParser())

// router regist
router.use('/sms', res.routes())

const options = {
  ENV: process.env.NODE_ENV,
}

app.use(helmet())
app.use(router.routes())
app.use(router.allowedMethods())

// server  listen
app.listen(50001, () => {
  console.log('server start')
})
