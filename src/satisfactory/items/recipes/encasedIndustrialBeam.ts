import { type Recipe } from '../types';
import { Cable } from './cable';

export const EncasedIndustrialBeam = 'Encased Industrial Beam';

export const EncasedIndustrialBeamRecipes: Recipe[] = [
  {
    name: 'Encased Industrial Beam',
    default: true,
    produces: [
      {
        item: EncasedIndustrialBeam,
        rate: 0,
      },
    ],
    consumes: [
      {
        item: Cable,
        rate: 0,
      },
    ],
  },
];
