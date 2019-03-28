const winston = require('winston')
const fs = require('fs')
require('date-util')

const logDir = 'logs'
const format = new Date().toLocaleTimeString()

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir)
}

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      name: 'consoleLog',
      colorize: true,
      timestamp: format,
      json: false,
    }),
    new (require('winston-daily-rotate-file'))({
      level: 'info',
      filename: `${logDir}/-logs.logs`,
      timestamp: format,
      datePattern: 'yyyy-MM-dd',
      colorize: true,
      prepend: true,
    }),
  ],
})

module.exports = logger
