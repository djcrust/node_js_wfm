const { json } = require('express/lib/response')
const databaseList = require('../../database/database_list')
const pool = require('../../database/database')

const getUsers = async (request, response) => {
    
    const {Login, status} = request.query
    const { instance } = request.params
    let sql = 'SELECT * FROM "t_User"'
    try {
        const allUsers = await pool.query(sql);
        response.status(200).json({
            success: 1,
            count: allUsers.rowCount,
            data: allUsers.rows
        })
    } catch (err) {
        response.status(401).json({
            success: 0,
            data: err.message
        })
    }
}

const getUserId = async (request, response) => {
    const { id } = request.params
    let sql = 'SELECT * FROM "t_User" WHERE "IDt_User" = $1'
    try {
        const userData = await pool.query(sql, [id]);
        if(userData.rowCount == 0){
            response.status(401).json({
                success: 0,
                count: userData.rowCount,
                data: 'No Data'
            })
        }else{
            response.status(200).json({
                success: 1,
                count: userData.rowCount,
                data: userData.rows[0]
            })
        }
    } catch (err) {
        response.status(401).json({
            success: 0,
            data: err.message
        })
    }
}
  
module.exports = {
    getUsers,
    getUserId,
}