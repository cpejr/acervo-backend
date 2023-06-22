import { Router } from 'express';

// import * as BaseUserController from '../controllers/BaseUserController.js';
import * as PhysicalPersonController from '../controllers/PhysicalPersonController.js';

const PhysicalPersonRoutes = Router();

PhysicalPersonRoutes.route('/')
  .get(PhysicalPersonController.get)
  .post(PhysicalPersonController.create);

PhysicalPersonRoutes.route('/:_id')
  .get(PhysicalPersonController.getById)
  .put(PhysicalPersonController.update)
  .delete(PhysicalPersonController.destroy);

PhysicalPersonRoutes.put('/:token', PhysicalPersonController.verifyEmail);

export default PhysicalPersonRoutes;
