const logger = require('../logger/winston.logger')

module.exports = function dbConnection(pool) {
  return new Promise((resolve, reject) => {
    try {
      pool.getConnection((err, connection) => {
        if (err) {
          console.log(err)
          throw new Error(err)
        } else {
          resolve(connection)
        }
      })
    } catch (e) {
      console.log(e)
      resolve('error')
    }
  })
}
