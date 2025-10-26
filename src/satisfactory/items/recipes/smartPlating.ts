import { type Recipe } from '../types';
import { Cable } from './cable';

export const SmartPlating = 'Smart Plating';

export const SmartPlatingRecipes: Recipe[] = [
  {
    name: 'Smart Plating',
    default: true,
    produces: [
      {
        item: SmartPlating,
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
