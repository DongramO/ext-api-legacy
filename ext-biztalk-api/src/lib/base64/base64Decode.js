const base64 = require('base-64')
const utf8 = require('utf8')

exports.StringDecoded = (stringBase64) => {
  // const encoded = new Buffer(bodyMEssage).toString('base64')
  const bytes = base64.decode(stringBase64)
  const text = utf8.decode(bytes)
  return text
}

