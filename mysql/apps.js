
const getApps = async (connection, status = "active") => {
  try {
    const SQL = `
      SELECT apps.*, COUNT(apps_methods.uuid) AS methods
      FROM apps
      LEFT JOIN apps_methods ON apps.uuid = apps_methods.app_uuid
      WHERE apps.status = ?
      GROUP BY apps.uuid
      ORDER BY apps.created_at
    `
    const results = await connection.awaitQuery(SQL, [status]);
    return results || []
  }catch(err){
    console.error(err)
    return JSON.stringify(err)
  }
}

const getAppMethods = async (connection, type, status = "active") => {
  try {
    const SQL = `
      SELECT apps_methods.*
      FROM apps
      INNER JOIN apps_methods ON apps.uuid = apps_methods.app_uuid
      WHERE apps.status = ? AND apps_methods.type = ?
      ORDER BY apps_methods.created_at
    `
    const results = await connection.awaitQuery(SQL, [status, type]);
    return results || []
  }catch(err){
    console.error(err)
    return JSON.stringify(err)
  }
}

module.exports = {
  getAppMethods,
  getApps
}