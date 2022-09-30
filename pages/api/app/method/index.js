import { closeConnection, openConnection } from '@root/mysql/connection'
import { getAppMethods } from '@root/mysql/apps'

export default async function handler(req, res) {
  const conn = await openConnection()
  if (req.method === 'POST') {
    
  } else if(req.method === 'GET') {
    const result = await getAppMethods(conn, req.query.type, req.query.status)
    closeConnection(conn)
    res.send(result)
  }
}