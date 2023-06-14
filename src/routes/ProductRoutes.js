import { Router } from 'express';

import multerConfig from '../config/multer.js';
import * as ProductController from '../controllers/ProductController.js';
import { IMAGE_CONFIG } from '../utils/general/constants.js';

const ProductRoutes = Router();

const processFile = multerConfig({
  allowedMimes: IMAGE_CONFIG.allowedMimeTypes,
  sizeLimitInMB: IMAGE_CONFIG.sizeLimitInMB,
});

ProductRoutes.route('/')
  .get(ProductController.get)
  .post(processFile.single('image'), ProductController.create);

ProductRoutes.route('/:_id')
  .get(ProductController.getById)
  .put(ProductController.update)
  .delete(ProductController.destroy);

export default ProductRoutes;
