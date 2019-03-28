const Router = require('koa-router')
const api = require('./api')

const res = new Router()

res.use('/api', api.routes())

module.exports = res
