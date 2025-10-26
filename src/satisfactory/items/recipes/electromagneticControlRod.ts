import { type Recipe } from '../types';
import { Cable } from './cable';

export const ElectromagneticControlRod = 'Electromagnetic Control Rod';

export const ElectromagneticControlRodRecipes: Recipe[] = [
  {
    name: 'Electromagnetic Control Rod',
    default: true,
    produces: [
      {
        item: ElectromagneticControlRod,
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
