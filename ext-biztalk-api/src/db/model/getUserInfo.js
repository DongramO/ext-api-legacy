// const libModule = require('../../lib')

// exports.setData = (connection, bodyMessage) => {
//   return new Promise((resolve, reject) => {
//     try {
//       const insertQuery = 'SELECT * FROM TB_STUDENT where CELLPHONE_NUMBER = ?'
//       connection.query(insertQuery,[], (err, result) => {
//         if (err) {
//           logger.log('error', err)
//           connection.release()
//           throw new Error(err)
//         } else {
//           resolve('success')
//           connection.release()
//         }
//       })
//     } catch (e) {
//       logger.log('error', e)
//       connection.release()
//       resolve('error')
//     }
//   })
// }
