const Router = require('koa-router')

const send = require('./send.ctrl')

const detour = new Router()

detour.post('/', send.targeting)

module.exports = detour
