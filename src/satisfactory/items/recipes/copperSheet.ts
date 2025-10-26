import type { Recipe } from '..';
import { Cable } from './cable';

export const CopperSheet = 'Copper Sheet';

export const CopperSheetRecipes: Recipe[] = [
  {
    name: 'Copper Sheet',
    default: true,
    produces: [
      {
        item: CopperSheet,
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
