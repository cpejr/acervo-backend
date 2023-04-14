import { Router } from 'express';

import * as PostController from '../controllers/PostController.js';

const PostRoutes = Router();

PostRoutes.route('/').get(PostController.get).post(PostController.create);

PostRoutes.route('/:_id')
  .get(PostController.getById)
  .put(PostController.update)
  .delete(PostController.destroy);

export default PostRoutes;
