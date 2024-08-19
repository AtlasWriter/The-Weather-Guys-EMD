import { Router } from 'express';
import * as stormReportController from './controller';  // Import the controller

const router = Router();

router
  .route('/')  // Get all storm reports
  .get(stormReportController.getAll);

router
  .route('/:id')  // Get a specific storm report by ID
  .get(stormReportController.getById);

router
  .route('/')  // Create a new storm report
  .post(stormReportController.create);

router
  .route('/:id')  // Update an existing storm report
  .put(stormReportController.update);

router
  .route('/:id')  // Delete a storm report by ID
  .delete(stormReportController.remove);

export default router;
