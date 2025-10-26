import type { Recipe } from '..';
import { Cable } from './cable';

export const Battery = 'Battery';

export const BatteryRecipes: Recipe[] = [
  {
    name: 'Battery',
    default: true,
    produces: [
      {
        item: Battery,
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
