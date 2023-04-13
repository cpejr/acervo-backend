import { Router } from 'express';

import * as MemorialMaterialController from '../controllers/MemorialMaterialController.js';

const MemorialMaterialRoutes = Router();

MemorialMaterialRoutes.route('/')
  .get(MemorialMaterialController.get)
  .post(MemorialMaterialController.create);

MemorialMaterialRoutes.route('/:_id')
  .get(MemorialMaterialController.getById)
  .put(MemorialMaterialController.update)
  .delete(MemorialMaterialController.destroy);

export default MemorialMaterialRoutes;
