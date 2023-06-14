import { Router } from 'express';

import * as RatingController from '../controllers/RatingController.js';

const RatingRoutes = Router();

RatingRoutes.route('/').get(RatingController.get).post(RatingController.create);

RatingRoutes.route('/:_id')
  .get(RatingController.getById)
  .put(RatingController.update)
  .delete(RatingController.destroy);

export default RatingRoutes;
