import { closeConnection, openConnection } from '@root/mysql/connection'
import { getWorkflowNodes } from '@root/mysql/workflow'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    
  } else if(req.method === 'GET') {
    const conn = await openConnection()
    const result = await getWorkflowNodes(conn, req.query.uuid)
    closeConnection(conn)
    res.send(result)
  }
}