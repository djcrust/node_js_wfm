const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.BD_USER,
    host: process.env.BD_HOST,
    database: process.env.BD_NAME,
    password: process.env.BD_PASSWORD,
    port: process.env.BD_PORT,
  })

module.exports = pool