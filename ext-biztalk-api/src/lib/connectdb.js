module.exports = function dbConnection(pool) {
  return new Promise((resolve, reject) => {
    try {
      pool.getConnection((err, connection) => {
        if (err) {
          reject(e)
        } else {
          resolve(connection)
        }
      })
    } catch (e) {
      reject(e)
    }
  })
}
