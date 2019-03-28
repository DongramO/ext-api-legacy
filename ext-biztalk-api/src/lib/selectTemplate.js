const biztalk = require('../../config/biz.config')

// 서비스 문자열에 대해서는 static 하게 만들어서 써는게 좋을꺼 같다.
// 파일을 따로 뺴는게 좋을 꺼 같지만 지금 바꿔서 뭐해.. :(
const TEMPLATE_CODE_TO_SELLER = 'BD001'
const TEMPLATE_CODE_TO_BUYER = 'BD002'
const TEMPLATE_CODE_TO_DISCONNECTSELLER = 'BD003'

module.exports = function template(bodyMessage) {
  if (bodyMessage.TEMPLATE_CODE === TEMPLATE_CODE_TO_SELLER) {
    return biztalk.template_code.toSeller
  } else if (bodyMessage.TEMPLATE_CODE === TEMPLATE_CODE_TO_BUYER) {
    return biztalk.template_code.toBuyer
  } else if (bodyMessage.TEMPLATE_CODE === TEMPLATE_CODE_TO_DISCONNECTSELLER) {
    return biztalk.template_code.DisconnectSeller
  } else return 'error'
}
