import type { Recipe } from '..';
import { Cable } from './cable';

export const AlcladAluminumSheet = 'Alclad Aluminum Sheet';

export const AlcladAluminumSheetRecipes: Recipe[] = [
  {
    name: 'Alclad Aluminum Sheet',
    default: true,
    produces: [
      {
        item: AlcladAluminumSheet,
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
