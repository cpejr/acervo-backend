import { Router } from 'express';

import FileRoutes from './FileRoutes.js';
import LegalPersonRoutes from './LegalPersonRoutes.js';
import PhysicalPersonRoutes from './PhysicalPersonRoutes.js';

const routes = Router();

routes.use('/files', FileRoutes);
routes.use('/physicalperson', PhysicalPersonRoutes);
routes.use('/legalperson', LegalPersonRoutes);

export default routes;
