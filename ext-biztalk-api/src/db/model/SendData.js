const libModule = require('../../lib')

exports.setData = (connection, bodyMessage) => {
  return new Promise((resolve, reject) => {
    try {
      // 1.제목 2.컨텐츠 3.발신자번호, 4.메시지상태 5.수신자번호 6.메시지 종류 7.센더키 8.템플릿코드
      const insertQuery = `
        INSERT INTO
          ata_mmt_tran (
            date_client_req,
            subject, content,
            callback,
            msg_status,
            recipient_num ,
            msg_type,
            sender_key,
            template_code
          )
        VALUES (
          sysdate(), ?, ?, ?, ?, ?, ?, ?, ?
        )
      `
      connection.query(insertQuery, [bodyMessage.TITLE, bodyMessage.BODY_MESSAGE, bodyMessage.SENDER_NUMBER, '1', bodyMessage.RECEIVER_NUMBER, bodyMessage.MESSAGE_TYPE, bodyMessage.SENDER_KEY, bodyMessage.TEMPLATE_CODE], 
      (err, result) => {
        if (err) {
          console.error(err)
          reject(err)
        } else {
          console.log('success')
          resolve({})
        }
      })
    } catch (e) {
      reject(e)
    } finally {
      connection.release()
    }
  })
}
