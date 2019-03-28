const logger = require('../../logger/winston.logger')

exports.setData = (connection, bodyMessage) => {
  logger.log('info', bodyMessage)
  return new Promise((resolve, reject) => {
    try {
      const insertQuery = `INSERT INTO TBL_SUBMIT_QUEUE values 
      ('null', '1', 'planetory01', '1', '00', 'I', CAST(DATE_FORMAT(now(),'%Y%m%d%H%m%s') AS CHAR), 
      '1', ?, ?, '', '00', ?, '', 0, '', '', CAST(DATE_FORMAT(now(),'%Y%m%d%H%i%s') AS CHAR),
       '', '', '', '', '0', '', ?, '02', '', '', '', '', '', '', 0 ,0)`
      // 입력사항 => 1. 수신자번호 2.발신자번호 3.메시지내용
      logger.log('info', insertQuery)
      connection.query(insertQuery, [bodyMessage.RECEIVER, bodyMessage.SENDER, bodyMessage.MESSAGE, bodyMessage.TITLE], (err, result) => {
        if (err) {
          logger.log('error', err)
          connection.release()
          throw new Error(err)
        } else {
          logger.log('info', result)
          connection.release()
          resolve('success')
        }
      })
    } catch (e) {
      logger.log('error', e)
      connection.release()
      resolve('error')
    }
  })
}
