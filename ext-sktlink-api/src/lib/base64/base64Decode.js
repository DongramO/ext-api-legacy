const base64 = require('base-64')
const utf8 = require('utf8')
const logger = require('../../logger/winston.logger')

exports.StringDecoded = (stringBase64,err) => {
  console.log(stringBase64)
  if (err) logger.log('error', 'string decode error %s', err)
  const bytes = base64.decode(stringBase64)
  const text = utf8.decode(bytes)
  return text
}

