const mysql = require('mysql-await')
const connection_config = require('./connection.json')

const pool = mysql.createPool({
  host: '67.205.189.142',
  user: 'user',
  password: '123987xd',
  database: 'workflows'
});

async function openConnection(){
    return await pool.awaitGetConnection()
}

function closeConnection(con) {
    con.release()
}

module.exports = {
    openConnection,
    closeConnection
}