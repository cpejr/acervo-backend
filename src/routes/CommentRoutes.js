import { Router } from 'express';

import * as CommentController from '../controllers/CommentController.js';

const CommentRoutes = Router();

CommentRoutes.route('/')
  .get(CommentController.get)
  .post(CommentController.create);

CommentRoutes.route('/:_id')
  .get(CommentController.getById)
  .put(CommentController.update)
  .delete(CommentController.destroy);

export default CommentRoutes;
