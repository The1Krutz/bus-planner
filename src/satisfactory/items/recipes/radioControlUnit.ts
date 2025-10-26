import type { Recipe } from '..';
import { Cable } from './cable';

export const RadioControlUnit = 'Radio Control Unit';

export const RadioControlUnitRecipes: Recipe[] = [
  {
    name: 'Radio Control Unit',
    default: true,
    produces: [
      {
        item: RadioControlUnit,
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
