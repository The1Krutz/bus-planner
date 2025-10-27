import type { Recipe } from '..';
import { AluminumIngot, CopperIngot } from './importOnlyItems';

export const AlcladAluminumSheet = 'Alclad Aluminum Sheet';

export const AlcladAluminumSheetRecipes: Recipe[] = [
  {
    name: 'Alclad Aluminum Sheet',
    default: true,
    produces: [{ item: AlcladAluminumSheet, rate: 30 }],
    consumes: [
      { item: AluminumIngot, rate: 30 },
      { item: CopperIngot, rate: 10 },
    ],
  },
];
