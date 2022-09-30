
const getFlowCheckout = async (connection, status = "active") => {
  try {
    const SQL = `
      SELECT *
      FROM flows_checkout
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
      SELECT *
      FROM flows_payment
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