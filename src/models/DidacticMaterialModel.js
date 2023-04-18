import mongoose from 'mongoose';

import { TABLE_NAMES } from '../utils/general/constants.js';
import MaterialModel, { discriminatorKey } from './MaterialModel.js';

const DidacticMaterialModel = MaterialModel.discriminator(
  TABLE_NAMES.DIDACTIC_MATERIAL,
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
        required: true,
      },
    },
    { discriminatorKey }
  )
);
export default DidacticMaterialModel;
