import { Router } from 'express';

import * as DidacticMaterialController from '../controllers/DidacticMaterialController.js';

const DidacticMaterialRoutes = Router();

DidacticMaterialRoutes.route('/')
  .get(DidacticMaterialController.get)
  .post(DidacticMaterialController.create);

DidacticMaterialRoutes.route('/:_id')
  .get(DidacticMaterialController.getById)
  .put(DidacticMaterialController.update)
  .delete(DidacticMaterialController.destroy);

export default DidacticMaterialRoutes;
