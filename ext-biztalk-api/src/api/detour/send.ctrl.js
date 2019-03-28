const libModule = require('../../lib')
const Direct = require('../../lib/base64')
const insert = require('../../db/model/SendData')
const getUserInfo = require('../../db/model/SendData')
const mysqlConfig = require('../../../config/dbconfig')

const mysql = require('mysql')

const setExternalDB = mysql.createPool(mysqlConfig[process.env.NODE_ENV || 'development'])
const setServiceDB = mysql.createPool(mysqlConfig.service)
exports.targeting = async (ctx) => {
  try {
    const bodyMessage = ctx.request.rawBody
    console.log(ctx.request.rawBody)
    const DecodedBody = Direct.directBase64(bodyMessage, '0')
    // const connectService = await libModule.dbConnection(setServiceDB)
    // const userInfo = await getUserInfo.selectData(connectService, DecodedBody)
    // const content = libModule.selectTemplate(DecodedBody)
    const connectExternal = await libModule.dbConnection(setExternalDB)
    const insertion = await insert.setData(connectExternal,DecodedBody)
    console.log(DecodedBody.BODY_MESSAGE)
    const resultData = Direct.directBase64(bodyMessage, '1', insertion)
    ctx.status = 200
    ctx.body = resultData
    console.log(resultData)
  } catch (e) {
    console.log(e)
    ctx.status = 500
    ctx.body = null
  }
}

