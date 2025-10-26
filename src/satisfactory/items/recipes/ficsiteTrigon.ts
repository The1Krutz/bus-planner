import type { Recipe } from '..';
import { Cable } from './cable';

export const FicsiteTrigon = 'Ficsite Trigon';

export const FicsiteTrigonRecipes: Recipe[] = [
  {
    name: 'Ficsite Trigon',
    default: true,
    produces: [
      {
        item: FicsiteTrigon,
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
