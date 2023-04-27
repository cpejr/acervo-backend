import { Router } from 'express';

import AdvertisementRoutes from './AdvertisementRoutes.js';
import DidacticMaterialRoutes from './DidacticMaterialRoutes.js';
import EventRoutes from './EventRoutes.js';
import FileRoutes from './FileRoutes.js';
import LegalPersonRoutes from './LegalPersonRoutes.js';
import MemorialMaterialRoutes from './MemorialMaterialRoutes.js';
import PhysicalPersonRoutes from './PhysicalPersonRoutes.js';
import SponsorRoutes from './SponsorRoutes.js';

const routes = Router();

routes.use('/files', FileRoutes);
routes.use('/physicalperson', PhysicalPersonRoutes);
routes.use('/legalperson', LegalPersonRoutes);
routes.use('/didacticmaterial', DidacticMaterialRoutes);
routes.use('/memorialmaterial', MemorialMaterialRoutes);
routes.use('/event', EventRoutes);
routes.use('/sponsor', SponsorRoutes);
routes.use('/advertisement', AdvertisementRoutes);

export default routes;
