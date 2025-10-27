import type { Recipe } from '..';
import { CopperIngot, Water } from './importOnlyItems';

export const CopperSheet = 'Copper Sheet';

export const CopperSheetRecipes: Recipe[] = [
  {
    name: 'Copper Sheet',
    default: true,
    produces: [{ item: CopperSheet, rate: 10 }],
    consumes: [{ item: CopperIngot, rate: 20 }],
  },
  {
    name: 'Steamed Copper Sheet',
    produces: [{ item: CopperSheet, rate: 22.5 }],
    consumes: [
      { item: CopperIngot, rate: 22.5 },
      { item: Water, rate: 22.5 },
    ],
  },
];
