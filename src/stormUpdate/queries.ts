// src/stormUpdate/stormUpdate.queries.ts
// src/stormUpdate/stormUpdate.queries.ts

export const stormUpdateQueries = {
    GET_ALL_STORM_UPDATES: 'SELECT * FROM stormUpdate',
  
    GET_STORM_UPDATE_BY_ID: 'SELECT * FROM stormUpdate WHERE id = ?',
  
    CREATE_STORM_UPDATE: `
      INSERT INTO stormUpdate (stromName, stormPosition, stormTrack, stormImpact, stormOpnionForecast, stormUpdateDate) 
      VALUES (?, ?, ?, ?, ?, ?)
    `,
  
    UPDATE_STORM_UPDATE: `
      UPDATE stormUpdate
      SET stromName = ?, stormPosition = ?, stormTrack = ?, stormImpact = ?, stormOpnionForecast = ?, stormUpdateDate = ?
      WHERE id = ?
    `,
  
    DELETE_STORM_UPDATE: 'DELETE FROM stormUpdate WHERE id = ?',
  };
  