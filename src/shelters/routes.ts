import { Router } from 'express';
import * as shelterController from './controller';  // Import the controller

const router = Router();

router
  .route('/')  // Get all shelters
  .get(shelterController.getAll);

router
  .route('/:id')  // Get a specific shelter by ID
  .get(shelterController.getById);

router
  .route('/')  // Create a new shelter
  .post(shelterController.create);

router
  .route('/:id')  // Update an existing shelter
  .put(shelterController.update);

router
  .route('/:id')  // Delete a shelter by ID
  .delete(shelterController.remove);

export default router;
