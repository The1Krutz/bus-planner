import type { Recipe } from '..';
import { Cable } from './cable';

export const Supercomputer = 'Supercomputer';

export const SupercomputerRecipes: Recipe[] = [
  {
    name: 'Supercomputer',
    default: true,
    produces: [
      {
        item: Supercomputer,
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
