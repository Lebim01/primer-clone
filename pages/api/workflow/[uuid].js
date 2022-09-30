import { closeConnection, openConnection } from '@root/mysql/connection'
import { getWorkflow } from '@root/mysql/workflow'

export default async function handler(req, res) {
  const conn = await openConnection()
  if (req.method === 'POST') {
    
  } else if(req.method === 'GET') {
    const result = await getWorkflow(conn, req.query.uuid)
    closeConnection(conn)
    res.send(result)
  }
}