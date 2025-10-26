import type { Recipe } from '..';
import { Cable } from './cable';

export const TimeCrystal = 'Time Crystal';

export const TimeCrystalRecipes: Recipe[] = [
  {
    name: 'Time Crystal',
    default: true,
    produces: [
      {
        item: TimeCrystal,
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
