import { Router } from 'express';
import * as powerOutageController from './controller';  // Import the controller

const router = Router();

router
  .route('/')  // Get all power outages
  .get(powerOutageController.getAll);

router
  .route('/:id')  // Get a specific power outage by ID
  .get(powerOutageController.getById);

router
  .route('/')  // Create a new power outage
  .post(powerOutageController.create);

router
  .route('/:id')  // Update an existing power outage
  .put(powerOutageController.update);

router
  .route('/:id')  // Delete a power outage by ID
  .delete(powerOutageController.remove);

export default router;
