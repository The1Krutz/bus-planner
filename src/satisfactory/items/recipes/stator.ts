import { type Recipe } from '../types';
import { Cable } from './cable';

export const Stator = 'Stator';

export const StatorRecipes: Recipe[] = [
  {
    name: 'Stator',
    default: true,
    produces: [
      {
        item: Stator,
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
