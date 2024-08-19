import express, { Request, Response } from 'express';
import stormUpdateRouter from './src/stormUpdate/routes';  // Correct the import path
import logger from './middleware/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
import schoolClosingRouter from './src/schoolClosings/routes';  // Import the routes
import powerOutageRouter from './src/powerOutages/routes';  // Import the routes
import shelterRouter from './src/shelters/routes';  // Import the shelter routes
import stormReportRouter from './src/stormReports/routes';  // Import the storm report routes


dotenv.config();  // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Security and logging middleware
app.use(cors());
app.use(helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(logger);
  console.log(process.env.GREETING + ' in dev mode');
}

// Define the root route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to The Weather Guys Emergency Management Dashboard API');
});

// Use the routers for handling API requests
// Add /api to keep routes more RESTful
app.use('/api/stormUpdates', stormUpdateRouter);  
app.use('/api/schoolClosings', schoolClosingRouter);
app.use('/api/powerOutages', powerOutageRouter);
app.use('/api/shelters', shelterRouter);
app.use('/api/stormReports', stormReportRouter);






// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log(process.env.GREETING);
  console.log(`Server running on port: ${process.env.PORT}`);
  console.log(`MySQL Database Host: ${process.env.MY_SQL_DB_HOST}`);
  console.log(`MySQL Database User: ${process.env.MY_SQL_DB_USER}`);
});
