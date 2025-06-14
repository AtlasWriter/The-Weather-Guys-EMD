import { getPool } from "../services/mysql.connector";
import { searchQueries } from "./queries";
import { SearchResult } from "./model";

export const searchReports = async (query: string): Promise<SearchResult[]> => {
  return new Promise((resolve, reject) => {
    const pool = getPool(); // Ensure pool is initialized

    pool.query(
      searchQueries.SEARCH_REPORTS,
      [`%${query}%`, `%${query}%`, `%${query}%`, `%${query}%`, `%${query}%`, `%${query}%`, `%${query}%`, `%${query}%`, `%${query}%`, `%${query}%`],
      (err, results) => {
        if (err) {
          console.error("Database error:", err);
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });
};
