export const stormReportQueries = {
    GET_ALL_STORM_REPORTS: 'SELECT * FROM stromreports',
    GET_STORM_REPORT_BY_ID: 'SELECT * FROM stromreports WHERE id = ?',
    CREATE_STORM_REPORT: `
      INSERT INTO stromreports (event, description, date, street, isGreenville, isSpartanburg)
      VALUES (?, ?, ?, ?, ?, ?)
    `,
    UPDATE_STORM_REPORT: `
      UPDATE stromreports
      SET event = ?, description = ?, date = ?, street = ?, isGreenville = ?, isSpartanburg = ?
      WHERE id = ?
    `,
    DELETE_STORM_REPORT: 'DELETE FROM stromreports WHERE id = ?',
  };
  