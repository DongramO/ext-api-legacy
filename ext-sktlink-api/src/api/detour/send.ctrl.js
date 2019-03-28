const lib = require('../../lib')
const insert = require('../../db/model/sendData')
const modules = require('../../modules')
const Direct = require('../../lib/base64')
const mysqlConfig = require('../../../config/dbconfig')
const logger = require('../../logger/winston.logger')

const mysql = require('mysql')

const setdb = mysql.createPool(mysqlConfig[process.env.NODE_ENV || 'development'])

exports.targeting = async (ctx) => {
  const bodyMessage = JSON.parse(ctx.request.rawBody)
  const DecodedBody = Direct.directBase64(bodyMessage, '0')
  const connection = await lib.dbConnection(setdb)
  const result = await insert.setData(connection, DecodedBody)
  // const resultData = Direct.directBase64(bodyMessage, '1', insertion)
  const sendData = await modules.resultData(result)

  logger.log('info', result)
  if (result === 'success') {
    ctx.status = 200
  } else if (result === 'error') {
    ctx.status = 500
  }
  ctx.body = sendData
}
