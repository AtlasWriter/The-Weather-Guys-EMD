export const schoolClosingQueries = {
    GET_ALL_SCHOOL_CLOSINGS: 'SELECT * FROM schoolClosings',
    GET_SCHOOL_CLOSING_BY_ID: 'SELECT * FROM schoolClosings WHERE id = ?',
    CREATE_SCHOOL_CLOSING: `
      INSERT INTO schoolClosings (name, status, isGreenville, isSpartanburg)
      VALUES (?, ?, ?, ?)
    `,
    UPDATE_SCHOOL_CLOSING: `
      UPDATE schoolClosings
      SET name = ?, status = ?, isGreenville = ?, isSpartanburg = ?
      WHERE id = ?
    `,
    DELETE_SCHOOL_CLOSING: 'DELETE FROM schoolClosings WHERE id = ?',
  };
  