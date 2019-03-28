const logger = require('../logger/winston.logger')

module.exports = async function resultSet(result) {
  logger.log('info', 'modules resultset access')
  return new Promise((resolve, reject) => {
    let dataSet = {}
    try {
      if (result === 'error') {
        dataSet = {
          RESULT_CODE: '50000',
          RESULT_DESC: 'NOT_SATISFIED_PARAM',
          RESULT_MESSAGE: 'FAIL',
        }
      } else {
        dataSet = {
          RESULT_CODE: '20000',
          RESULT_DESC: 'SUCCESS',
          RESULT_MESSAGE: 'SUCCESS',
        }
        logger.log('info', 'modules resultset success')
        resolve(dataSet)
      }
    } catch (e) {
      logger.log('error', e)
      resolve([])
    }
  })
}
