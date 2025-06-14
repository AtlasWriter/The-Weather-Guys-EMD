export const searchQueries = {
    SEARCH_REPORTS: `
      SELECT id, event, description, date, street AS location, 'stormreports' AS source 
      FROM stromreports 
      WHERE event LIKE ? OR description LIKE ? OR date LIKE ? OR street LIKE ?
  
      UNION
  
      SELECT id, stromName AS event, stormPosition AS description, stormUpdateDate AS date, stormTrack AS location, 'stormupdate' AS source 
      FROM stormupdate 
      WHERE stromName LIKE ? OR stormPosition LIKE ? OR stormImpact LIKE ? OR stormUpdateDate LIKE ?
  
      UNION
  
      SELECT id, affecting AS event, location AS description, NULL AS date, location AS location, 'poweroutages' AS source 
      FROM poweroutages 
      WHERE affecting LIKE ? OR location LIKE ?;
    `
  };
  