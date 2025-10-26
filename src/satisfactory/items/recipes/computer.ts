import type { Recipe } from '..';
import { Cable } from './cable';

export const Computer = 'Computer';

export const ComputerRecipes: Recipe[] = [
  {
    name: 'Computer',
    default: true,
    produces: [
      {
        item: Computer,
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
