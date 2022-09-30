
const getFlowCheckout = async (connection, status = "active") => {
  try {
    const SQL = `
      SELECT flows_checkout.*, workflow.uuid as workflow_uuid
      FROM flows_checkout
      LEFT JOIN workflow ON workflow.flow_uuid = flows_checkout.uuid
      WHERE flows_checkout.status = ?
      ORDER BY flows_checkout.created_at
    `
    const results = await connection.awaitQuery(SQL, [status]);
    return results || []
  }catch(err){
    console.error(err)
    return JSON.stringify(err)
  }
}

const getFlowPayment = async (connection, status = "active") => {
  try {
    const SQL = `
      SELECT flows_payment.*, workflow.uuid as workflow_uuid
      FROM flows_payment
      LEFT JOIN workflow ON workflow.flow_uuid = flows_payment.uuid
      WHERE flows_payment.status = ?
      ORDER BY flows_payment.created_at
    `
    const results = await connection.awaitQuery(SQL, [status]);
    return results || []
  }catch(err){
    console.error(err)
    return JSON.stringify(err)
  }
}

module.exports = {
  getFlowCheckout,
  getFlowPayment
}