import { Router } from 'express';

import createUploaderMiddleware from '../config/multer.js';
import * as ProductController from '../controllers/ProductController.js';
import { IMAGE_CONFIG } from '../utils/general/constants.js';

const ProductRoutes = Router();

const processFilesMiddeware = createUploaderMiddleware({
  allowedMimes: IMAGE_CONFIG.allowedMimeTypes,
  sizeLimitInMB: IMAGE_CONFIG.sizeLimitInMB,
  fields: [{ name: 'image' }],
});

ProductRoutes.route('/')
  .get(ProductController.get)
  .post(processFilesMiddeware, ProductController.create);

ProductRoutes.route('/:_id')
  .get(ProductController.getById)
  .put(ProductController.update)
  .delete(ProductController.destroy);

export default ProductRoutes;
