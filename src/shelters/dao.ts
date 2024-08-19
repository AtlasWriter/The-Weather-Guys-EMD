import { execute } from '../services/mysql.connector';  // Ensure correct import for the execute function
import { shelters } from './model';  // Import the model
import { shelterQueries } from './queries';  // Import the SQL queries

export const getAllShelters = async (): Promise<shelters[]> => {
  return execute<shelters[]>(shelterQueries.GET_ALL_SHELTERS, []);
};

export const getShelterById = async (id: string): Promise<shelters> => {
  const results = await execute<shelters[]>(shelterQueries.GET_SHELTER_BY_ID, [id]);
  return results[0];  // Assuming only one result should be returned
};

export const createShelter = async (shelter: shelters): Promise<void> => {
  await execute(shelterQueries.CREATE_SHELTER, [
    shelter.name,
    shelter.address,
    shelter.phone,
    shelter.isGreenville,
    shelter.isSpartanburg
  ]);
};

export const updateShelter = async (id: string, shelter: Partial<shelters>): Promise<void> => {
  await execute(shelterQueries.UPDATE_SHELTER, [
    shelter.name,
    shelter.address,
    shelter.phone,
    shelter.isGreenville,
    shelter.isSpartanburg,
    id  // The ID to identify which row to update
  ]);
};

export const deleteShelter = async (id: string): Promise<void> => {
  await execute(shelterQueries.DELETE_SHELTER, [id]);
};
