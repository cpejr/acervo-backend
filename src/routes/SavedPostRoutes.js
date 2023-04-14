import { Router } from 'express';

import * as SavedPostController from '../controllers/SavedPostController.js';

const SavedPostRoutes = Router();

SavedPostRoutes.route('/').get(SavedPostController.get).post(SavedPostController.create);

SavedPostRoutes.route('/:_id')
  .get(SavedPostController.getById)
  .put(SavedPostController.update)
  .delete(SavedPostController.destroy);

export default SavedPostRoutes;
