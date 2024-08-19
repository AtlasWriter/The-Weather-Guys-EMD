import { Router } from 'express';
import * as stormUpdateController from './controller';  // Ensure controller path is correct

const router = Router();

router
  .route('/')  // Fetch all storm updates
  .get(stormUpdateController.getAll);

router
  .route('/:id')  // Fetch a specific storm update by ID
  .get(stormUpdateController.getById);

router
  .route('/addNewStormUpdate')  // Create a new storm update
  .post(stormUpdateController.create);

router
  .route('/:id')  // Update an existing storm update
  .put(stormUpdateController.update);

router
  .route('/:id')  // Delete a storm update by ID
  .delete(stormUpdateController.remove);

export default router;
