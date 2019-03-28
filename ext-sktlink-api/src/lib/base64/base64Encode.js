const base64 = require('base-64')
const utf8 = require('utf8')

exports.StringEncoded = (stringutf8) => {
  const text = utf8.encode(stringutf8)
  const bytes = base64.encode(text)
  return text
}
