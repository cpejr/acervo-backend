import { Router } from 'express';

import * as PhysicalPersonController from '../controllers/PhysicalPersonController.js';

const PhysicalPersonRoutes = Router();

PhysicalPersonRoutes.route('/')
  .get(PhysicalPersonController.get)
  .post(PhysicalPersonController.create);

PhysicalPersonRoutes.route('/:_id')
  .get(PhysicalPersonController.getById)
  .put(PhysicalPersonController.update)
  .delete(PhysicalPersonController.destroy);

export default PhysicalPersonRoutes;
