import { closeConnection, openConnection } from '@root/mysql/connection'
import { getWorkflows } from '@root/mysql/workflow'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    
  } else if(req.method === 'GET') {
    const conn = await openConnection()
    const result = await getWorkflows(conn, req.query.type, req.query.status)
    closeConnection(conn)
    res.send(result)
  }
}