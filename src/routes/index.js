import { Router } from 'express';

import AdvertisementRoutes from './AdvertisementRoutes.js';
import CommentRoutes from './CommentRoutes.js';
import DidacticMaterialRoutes from './DidacticMaterialRoutes.js';
import EventRoutes from './EventRoutes.js';
import LegalPersonRoutes from './LegalPersonRoutes.js';
import MemorialMaterialRoutes from './MemorialMaterialRoutes.js';
import PhysicalPersonRoutes from './PhysicalPersonRoutes.js';
import PostRoutes from './PostRoutes.js';
import ProductRoutes from './ProductRoutes.js';
import RatingRoutes from './RatingRoutes.js';
import SavedPostRoutes from './SavedPostRoutes.js';
import SessionRoutes from './SessionRoutes.js';
import SponsorRoutes from './SponsorRoutes.js';

const routes = Router();

routes
  .use('/', SessionRoutes)
  .use('/physicalperson', PhysicalPersonRoutes)
  .use('/legalperson', LegalPersonRoutes)
  .use('/didacticmaterial', DidacticMaterialRoutes)
  .use('/memorialmaterial', MemorialMaterialRoutes)
  .use('/event', EventRoutes)
  .use('/sponsor', SponsorRoutes)
  .use('/advertisement', AdvertisementRoutes)
  .use('/product', ProductRoutes)
  .use('/post', PostRoutes)
  .use('/savedpost', SavedPostRoutes)
  .use('/comment', CommentRoutes)
  .use('/rating', RatingRoutes);

export default routes;
