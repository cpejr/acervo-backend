import { Router } from 'express';

import DidacticMaterialRoutes from './DidacticMaterialRoutes.js';
import EventRoutes from './EventRoutes.js';
import FileRoutes from './FileRoutes.js';
import LegalPersonRoutes from './LegalPersonRoutes.js';
import MemorialMaterialRoutes from './MemorialMaterialRoutes.js';
import PhysicalPersonRoutes from './PhysicalPersonRoutes.js';

const routes = Router();

routes.use('/files', FileRoutes);
routes.use('/physicalperson', PhysicalPersonRoutes);
routes.use('/legalperson', LegalPersonRoutes);
routes.use('/didacticmaterial', DidacticMaterialRoutes);
routes.use('/memorialmaterial', MemorialMaterialRoutes);
routes.use('/event', EventRoutes);

export default routes;
