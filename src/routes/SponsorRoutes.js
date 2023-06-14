import { Router } from 'express';

import * as SponsorController from '../controllers/SponsorController.js';

const SponsorRoutes = Router();

SponsorRoutes.route('/')
  .get(SponsorController.get)
  .post(SponsorController.create);

SponsorRoutes.route('/:_id')
  .get(SponsorController.getById)
  .put(SponsorController.update)
  .delete(SponsorController.destroy);

export default SponsorRoutes;
