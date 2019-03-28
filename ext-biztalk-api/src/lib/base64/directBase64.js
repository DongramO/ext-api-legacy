const Decode = require('./base64Decode')
const Encode = require('./base64Encode')

// type 0: 디코딩필요, 1: 인코딩필요
module.exports = function Direct(bodyMessage, type, result) {
  let Body = {}
  let bodyMessage2 = JSON.parse(bodyMessage)

  if (type === '0') {
    Body = {
      MESSAGE: Decode.StringDecoded(bodyMessage2.MESSAGE),
      MESSAGE_TYPE: Decode.StringDecoded(bodyMessage2.MESSAGE_TYPE),
      SENDER_NUMBER: Decode.StringDecoded(bodyMessage2.SENDER_NUMBER),
      RECEIVER_NUMBER: Decode.StringDecoded(bodyMessage2.RECEIVER_NUMBER),
      SENDER_KEY: Decode.StringDecoded(bodyMessage2.SENDER_KEY),
      TITLE: Decode.StringDecoded(bodyMessage2.TITLE),
      TEMPLATE_CODE: Decode.StringDecoded(bodyMessage2.TEMPLATE_CODE),
      BODY_MESSAGE:Decode.StringDecoded(bodyMessage2.BODY_MESSAGE),
    }
    return Body
  } else if (type === '1') {
    if (result === 'error') {
      Body = {
        RESULT_CODE: '50000',
        RESULT_DESC: 'NOT_SATISFIED_PARAM',
        RESULT_MESSAGE: 'FAIL',
      }
      return Body
    } else {
      Body = {
        RESULT_CODE: '20000',
        RESULT_DESC: 'SUCCESS',
        RESULT_PARAMS: {
          MESSAGE: Encode.StringEncoded(bodyMessage2.MESSAGE),
          RECEIVER_NUMBER: Encode.StringEncoded(bodyMessage2.RECEIVER_NUMBER),
          SENDER_KEY: Encode.StringEncoded(bodyMessage2.SENDER_KEY),
          MESSAGE_TYPE: Encode.StringEncoded(bodyMessage2.MESSAGE_TYPE),
          SENDER_NUMBER: Encode.StringEncoded(bodyMessage2.SENDER_NUMBER),
          TITLE: Encode.StringEncoded(bodyMessage2.TITLE),
          TEMPLATE_CODE: Encode.StringEncoded(bodyMessage2.TEMPLATE_CODE),
          BODY_MESSAGE:Encode.StringEncoded(bodyMessage2.BODY_MESSAGE),
        },
        RESULT_MESSAGE: 'SUCCESS',
      }
      return Body
    }
  }
}
