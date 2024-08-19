export const shelterQueries = {
    GET_ALL_SHELTERS: 'SELECT * FROM shelters',
    GET_SHELTER_BY_ID: 'SELECT * FROM shelters WHERE id = ?',
    CREATE_SHELTER: `
      INSERT INTO shelters (name, address, phone, isGreenville, isSpartanburg)
      VALUES (?, ?, ?, ?, ?)
    `,
    UPDATE_SHELTER: `
      UPDATE shelters
      SET name = ?, address = ?, phone = ?, isGreenville = ?, isSpartanburg = ?
      WHERE id = ?
    `,
    DELETE_SHELTER: 'DELETE FROM shelters WHERE id = ?',
  };
  