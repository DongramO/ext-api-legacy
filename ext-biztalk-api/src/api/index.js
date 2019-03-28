const Router = require('koa-router')
const detour = require('./detour')

const api = new Router()

api.use('/send', detour.routes())

module.exports = api
