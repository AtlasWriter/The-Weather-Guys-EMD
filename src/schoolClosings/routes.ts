import { Router } from 'express';
import * as schoolClosingController from './controller';  // Import the controller

const router = Router();

router
  .route('/')  // Get all school closings
  .get(schoolClosingController.getAll);

router
  .route('/:id')  // Get a specific school closing by ID
  .get(schoolClosingController.getById);

router
  .route('/')  // Create a new school closing
  .post(schoolClosingController.create);

router
  .route('/:id')  // Update an existing school closing
  .put(schoolClosingController.update);

router
  .route('/:id')  // Delete a school closing by ID
  .delete(schoolClosingController.remove);

export default router;
