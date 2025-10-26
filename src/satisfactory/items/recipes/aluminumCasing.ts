import { type Recipe } from '../types';
import { Cable } from './cable';

export const AluminumCasing = 'Aluminum Casing';

export const AluminumCasingRecipes: Recipe[] = [
  {
    name: 'Aluminum Casing',
    default: true,
    produces: [
      {
        item: AluminumCasing,
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
