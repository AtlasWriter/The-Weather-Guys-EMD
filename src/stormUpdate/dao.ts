// src/stormUpdate/stormUpdate.dao.ts
import { execute } from '../services/mysql.connector';  // Assumes you have an 'execute' function
import { stormUpdate } from './model';
import { OkPacket } from 'mysql';
import { stormUpdateQueries } from './queries';

export const getAllStormUpdates = async (): Promise<stormUpdate[]> => {
  return execute<stormUpdate[]>(stormUpdateQueries.GET_ALL_STORM_UPDATES, []);
};

export const getStormUpdateById = async (id: string): Promise<stormUpdate> => {
  const results = await execute<stormUpdate[]>(stormUpdateQueries.GET_STORM_UPDATE_BY_ID, [id]);
  return results[0];
};

export const createStormUpdate = async (update: stormUpdate): Promise<void> => {
  await execute(stormUpdateQueries.CREATE_STORM_UPDATE, [
    update.stromName,
    update.stormPosition,
    update.stormTrack,
    update.stormImpact,
    update.stormOpnionForecast,
    update.stormUpdateDate,
  ]);
};


export const deleteStormUpdate = async (id: string): Promise<void> => {
  await execute(stormUpdateQueries.DELETE_STORM_UPDATE, [id]);
};

export const updateStormUpdate = async (id: string, update: Partial<stormUpdate>): Promise<void> => {
  try {
    console.log(`Updating storm update with id ${id} in the database`, update);  // Debug logging
    await execute(stormUpdateQueries.UPDATE_STORM_UPDATE, [
      update.stromName,
      update.stormPosition,
      update.stormTrack,
      update.stormImpact,
      update.stormOpnionForecast,
      update.stormUpdateDate,
      id  // The ID to identify which row to update
    ]);
  } catch (err) {
    console.error('Error in updateStormUpdate DAO:', err);  // Log the error
    throw err;
  }
};