import { Router } from 'express';

import * as ProductController from '../controllers/ProductController.js';

const ProductRoutes = Router();

ProductRoutes.route('/')
  .get(ProductController.get)
  .post(ProductController.create);

ProductRoutes.route('/:_id')
  .get(ProductController.getById)
  .put(ProductController.update)
  .delete(ProductController.destroy);

export default ProductRoutes;
