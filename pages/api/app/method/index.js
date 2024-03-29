import { closeConnection, openConnection } from '@root/mysql/connection'
import { getAppMethods } from '@root/mysql/apps'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    
  } else if(req.method === 'GET') {
    const conn = await openConnection()
    const result = await getAppMethods(conn, req.query.type, req.query.status)
    closeConnection(conn)
    res.send(result)
  }
}