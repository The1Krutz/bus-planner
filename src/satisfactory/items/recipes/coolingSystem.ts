import type { Recipe } from '..';
import { Cable } from './cable';

export const CoolingSystem = 'Cooling System';

export const CoolingSystemRecipes: Recipe[] = [
  {
    name: 'Cooling System',
    default: true,
    produces: [
      {
        item: CoolingSystem,
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
