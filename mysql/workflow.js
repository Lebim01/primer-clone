
const getWorkflows = async (connection, type, status = "active") => {
  try {
    const SQL = `
      SELECT *
      FROM workflow
      WHERE workflow.status = ?
      ORDER BY created_at
    `
    const results = await connection.awaitQuery(SQL, [status, type]);
    return results || []
  }catch(err){
    console.error(err)
    return JSON.stringify(err)
  }
}

const getWorkflow = async (connection, uuid) => {
  try {
    const SQL = `
      SELECT *
      FROM workflow
      WHERE workflow.status = ? AND workflow.uuid = ?
      ORDER BY created_at
    `
    const results = await connection.awaitQuery(SQL, ["active", uuid]);
    return results.length > 0 ? results[0] : null
  }catch(err){
    console.error(err)
    return JSON.stringify(err)
  }
}

const getWorkflowNodes = async (connection, uuid) => {
  try {
    const SQL = `
      SELECT workflow_node.*
      FROM workflow
      INNER JOIN workflow_node ON workflow.uuid = workflow_node.workflow_uuid
      WHERE workflow.status = ? AND workflow.uuid = ?
    `
    const results = await connection.awaitQuery(SQL, ["active", uuid]);
    const parsed_result = results
      ? results.map((node) => ({
          ...node,
          id: node.node_id,
          position: JSON.parse(node.position),
          data: JSON.parse(node.data)
        }))
      : []
    
    return parsed_result;
  }catch(err){
    console.error(err)
    return JSON.stringify(err)
  }
}

module.exports = {
  getWorkflows,
  getWorkflow,
  getWorkflowNodes
}