import mongoose from 'mongoose';

import MaterialModel, { discriminatorKey } from './MaterialModel.js';

const DidacticMaterialModel = MaterialModel.discriminator(
  'DidacticMaterial',
  new mongoose.Schema(
    {
      category: {
        type: String,
        enum: [
          'Fotografias',
          'Vídeos',
          'História de Bom Despacho',
          'Depoimentos',
          'História das escolas estaduais e municipais de Bom Despacho',
          'Personalidades históricas',
          'Patrimônio histórico e cultural (material e imaterial)',
        ],
        requuired: true,
      },
    },
    { discriminatorKey }
  )
);
export default DidacticMaterialModel;
