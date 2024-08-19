export const powerOutagesQueries = {
    GET_ALL_POWER_OUTAGES: 'SELECT * FROM powerOutages',
    GET_POWER_OUTAGE_BY_ID: 'SELECT * FROM powerOutages WHERE id = ?',
    CREATE_POWER_OUTAGE: `
      INSERT INTO powerOutages (location, affecting, isGreenville, isSpartanburg)
      VALUES (?, ?, ?, ?)
    `,
    UPDATE_POWER_OUTAGE: `
      UPDATE powerOutages
      SET location = ?, affecting = ?, isGreenville = ?, isSpartanburg = ?
      WHERE id = ?
    `,
    DELETE_POWER_OUTAGE: 'DELETE FROM powerOutages WHERE id = ?',
  };
  