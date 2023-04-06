import { Router } from 'express';

import FileRoutes from './FileRoutes.js';

const routes = Router();

routes
  .use('/files', FileRoutes)
  
export default routes;
