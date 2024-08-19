import { execute } from '../services/mysql.connector';  // Ensure correct import for the execute function
import { stormReports } from './model';  // Import the model
import { stormReportQueries } from './queries';  // Import the SQL queries

export const getAllStormReports = async (): Promise<stormReports[]> => {
  return execute<stormReports[]>(stormReportQueries.GET_ALL_STORM_REPORTS, []);
};

export const getStormReportById = async (id: string): Promise<stormReports> => {
  const results = await execute<stormReports[]>(stormReportQueries.GET_STORM_REPORT_BY_ID, [id]);
  return results[0];  // Assuming only one result should be returned
};

export const createStormReport = async (stormReport: stormReports): Promise<void> => {
  await execute(stormReportQueries.CREATE_STORM_REPORT, [
    stormReport.event,
    stormReport.description,
    stormReport.date,
    stormReport.street,
    stormReport.isGreenville,
    stormReport.isSpartanburg
  ]);
};

export const updateStormReport = async (id: string, stormReport: Partial<stormReports>): Promise<void> => {
  await execute(stormReportQueries.UPDATE_STORM_REPORT, [
    stormReport.event,
    stormReport.description,
    stormReport.date,
    stormReport.street,
    stormReport.isGreenville,
    stormReport.isSpartanburg,
    id  // The ID to identify which row to update
  ]);
};

export const deleteStormReport = async (id: string): Promise<void> => {
  await execute(stormReportQueries.DELETE_STORM_REPORT, [id]);
};
