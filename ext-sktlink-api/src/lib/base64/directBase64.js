const Decode = require('./base64Decode')
const Encode = require('./base64Encode')
const logger = require('../../logger/winston.logger')

// type 0: 디코딩필요, 1: 인코딩필요
module.exports = function Direct(bodyMessage, type, result) {
  logger.log('info', ' base64 lib access type %d', type)
  logger.log('info', bodyMessage.MESSAGE)
  let Body = {}
  if (type === '0') {
    Body = {
      MESSAGE: Decode.StringDecoded(bodyMessage.MESSAGE),
      RECEIVER: Decode.StringDecoded(bodyMessage.RECEIVER),
      SENDER: Decode.StringDecoded(bodyMessage.SENDER),
      TITLE: Decode.StringDecoded(bodyMessage.TITLE),
    }
    console.log(Body)
    return Body
  } else if (type === '1') {
    if (result === 'error') {
      Body = {
        RESULT_CODE: '50000',
        RESULT_DESC: 'NOT_SATISFIED_PARAM',
        RESULT_MESSAGE: 'FAIL',
      }
      return Body
    }
  }
}
