import { Router } from 'express';

import * as AdvertisementController from '../controllers/AdvertisementController.js';

const AdvertisementRoutes = Router();

AdvertisementRoutes.route('/')
  .get(AdvertisementController.get)
  .post(AdvertisementController.create);

AdvertisementRoutes.route('/:_id')
  .get(AdvertisementController.getById)
  .put(AdvertisementController.update)
  .delete(AdvertisementController.destroy);

export default AdvertisementRoutes;
