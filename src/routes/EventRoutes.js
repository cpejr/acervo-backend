import { Router } from 'express';

import * as EventController from '../controllers/EventController.js';

const EventRoutes = Router();

EventRoutes.route('/').get(EventController.get).post(EventController.create);

EventRoutes.route('/:_id')
  .get(EventController.getById)
  .put(EventController.update)
  .delete(EventController.destroy);

export default EventRoutes;
