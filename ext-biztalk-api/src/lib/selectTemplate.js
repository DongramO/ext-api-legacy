const biztalk = require('../../config/biz.config')

module.exports = function template(bodyMessage) {
  if (bodyMessage.TEMPLATE_CODE === 'BD001') {
    return biztalk.template_code.toSeller
  } else if (bodyMessage.TEMPLATE_CODE === 'BD002') {
    return biztalk.template_code.toBuyer
  } else if (bodyMessage.TEMPLATE_CODE === 'BD003') {
    return biztalk.template_code.toSeller2
  } else return 'error'
}
