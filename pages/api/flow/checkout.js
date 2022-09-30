import { closeConnection, openConnection } from '@root/mysql/connection'
import { getFlowCheckout } from '@root/mysql/flows'

export default async function handler(req, res) {
  const conn = await openConnection()
  if (req.method === 'POST') {
    
  } else if(req.method === 'GET') {
    const result = await getFlowCheckout(conn, req.query.status)
    closeConnection(conn)
    res.send(result)
  }
}