import { closeConnection, openConnection } from '@root/mysql/connection'
import { getWorkflows } from '@root/mysql/workflow'

export default async function handler(req, res) {
  const conn = await openConnection()
  if (req.method === 'POST') {
    
  } else if(req.method === 'GET') {
    const result = await getWorkflows(conn, req.query.type, req.query.status)
    closeConnection(conn)
    res.send(result)
  }
}