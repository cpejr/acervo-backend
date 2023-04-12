import { Router } from 'express';

import * as PhysicalPersonController from '../controllers/PhysicalPersonController.js';
import verifyJWT from '../middleware/verifyJWT.js';

const PhysicalPersonRoutes = Router();

PhysicalPersonRoutes.route('/')
  .get(verifyJWT, PhysicalPersonController.get)
  .post(PhysicalPersonController.create);

PhysicalPersonRoutes.route('/:_id')
  .get(PhysicalPersonController.getById)
  .put(verifyJWT, PhysicalPersonController.update)
  .delete(verifyJWT, PhysicalPersonController.destroy);

export default PhysicalPersonRoutes;
