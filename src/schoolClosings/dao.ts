import { execute } from '../services/mysql.connector';  // Ensure correct import
import { schoolClosings } from './model';  // Import the model
import { schoolClosingQueries } from './queries';  // Import the SQL queries

export const getAllSchoolClosings = async (): Promise<schoolClosings[]> => {
  return execute<schoolClosings[]>(schoolClosingQueries.GET_ALL_SCHOOL_CLOSINGS, []);
};

export const getSchoolClosingById = async (id: string): Promise<schoolClosings> => {
  const results = await execute<schoolClosings[]>(schoolClosingQueries.GET_SCHOOL_CLOSING_BY_ID, [id]);
  return results[0];  // Assuming only one result should be returned
};

export const createSchoolClosing = async (schoolClosing: schoolClosings): Promise<void> => {
  await execute(schoolClosingQueries.CREATE_SCHOOL_CLOSING, [
    schoolClosing.name,
    schoolClosing.status,
    schoolClosing.isGreenville,
    schoolClosing.isSpartanburg
  ]);
};

export const updateSchoolClosing = async (id: string, schoolClosing: Partial<schoolClosings>): Promise<void> => {
  await execute(schoolClosingQueries.UPDATE_SCHOOL_CLOSING, [
    schoolClosing.name,
    schoolClosing.status,
    schoolClosing.isGreenville,
    schoolClosing.isSpartanburg,
    id
  ]);
};

export const deleteSchoolClosing = async (id: string): Promise<void> => {
  await execute(schoolClosingQueries.DELETE_SCHOOL_CLOSING, [id]);
};
