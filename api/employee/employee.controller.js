const pool = require('../../database/database')

const getEmployees = (request, response) => {

    let sql = 'SELECT * FROM t_people'

    pool.query(sql, (error, results) => {
        if (error){
            throw error
        }
        response.status(200).json({
          success: 1,
          data: results
        })
    })
}
  
module.exports = {
    getEmployees,
}