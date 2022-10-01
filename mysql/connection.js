import mysql from 'mysql-await'

const pool = mysql.createPool({
  host: '67.205.189.142',
  user: 'user',
  password: '123987xd',
  database: 'workflows',
  queueLimit: 500
});

export async function openConnection(){
    return await pool.awaitGetConnection()
}

export function closeConnection(con) {
    con.release()
}