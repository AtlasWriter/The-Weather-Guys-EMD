import { execute } from '../services/mysql.connector';  // Ensure correct import for the execute function
import { powerOutages } from './model';  // Import the model
import { powerOutagesQueries } from './queries';  // Import the SQL queries

export const getAllPowerOutages = async (): Promise<powerOutages[]> => {
  return execute<powerOutages[]>(powerOutagesQueries.GET_ALL_POWER_OUTAGES, []);
};

export const getPowerOutageById = async (id: string): Promise<powerOutages> => {
  const results = await execute<powerOutages[]>(powerOutagesQueries.GET_POWER_OUTAGE_BY_ID, [id]);
  return results[0];  // Assuming only one result should be returned
};

export const createPowerOutage = async (powerOutage: powerOutages): Promise<void> => {
  await execute(powerOutagesQueries.CREATE_POWER_OUTAGE, [
    powerOutage.location,
    powerOutage.affecting,
    powerOutage.isGreenville,
    powerOutage.isSpartanburg
  ]);
};

export const updatePowerOutage = async (id: string, powerOutage: Partial<powerOutages>): Promise<void> => {
  await execute(powerOutagesQueries.UPDATE_POWER_OUTAGE, [
    powerOutage.location,
    powerOutage.affecting,
    powerOutage.isGreenville,
    powerOutage.isSpartanburg,
    id  // The ID to identify which row to update
  ]);
};

export const deletePowerOutage = async (id: string): Promise<void> => {
  await execute(powerOutagesQueries.DELETE_POWER_OUTAGE, [id]);
};
