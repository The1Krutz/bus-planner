import { type Recipe } from '../types';
import { Cable } from './cable';

export const CopperPowder = 'Copper Powder';

export const CopperPowderRecipes: Recipe[] = [
  {
    name: 'Copper Powder',
    default: true,
    produces: [
      {
        item: CopperPowder,
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
