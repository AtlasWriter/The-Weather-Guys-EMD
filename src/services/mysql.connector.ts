import { createPool, Pool } from 'mysql';

let pool: Pool | null = null;

const initializeMySqlConnector = () => {
  if (pool) {
    console.log("Database pool already initialized.");
    return;
  }

  try {
    pool = createPool({
      connectionLimit: parseInt(process.env.MY_SQL_DB_CONNECTION_LIMIT || "10", 10),
      port: parseInt(process.env.MY_SQL_DB_PORT || "3306", 10),
      host: process.env.MY_SQL_DB_HOST,
      user: process.env.MY_SQL_DB_USER,
      password: process.env.MY_SQL_DB_PASSWORD,
      database: process.env.MY_SQL_DB_DATABASE,
    });

    console.debug("MySQL Adapter Pool generated successfully");
    console.log("Connected to database:", process.env.MY_SQL_DB_DATABASE);

    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Error: MySQL failed to connect", err);
        throw new Error("Unable to connect to the database");
      } else {
        console.log("Connection established");
        connection.release();
      }
    });
  } catch (error) {
    console.error("[MySQL Connector] Initialization Error:", error);
    throw new Error("Failed to initialize connection pool");
  }
};

// Ensure the pool is always initialized before any query execution
const getPool = () => {
  if (!pool) {
    console.log("Database pool was not initialized. Initializing now...");
    initializeMySqlConnector();
  }
  return pool!;
};

// Execute function remains unchanged
export const execute = <T>(query: string, params: string[] | Object): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    const connectionPool = getPool(); // Ensure pool is initialized

    connectionPool.query(query, params, (error, results) => {
      if (error) {
        console.error("[mysql.connector][execute][Error]:", error);
        return reject(error);
      }
      resolve(results);
    });
  });
};

export { initializeMySqlConnector, getPool };
