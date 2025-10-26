import { type Recipe } from '../types';
import { Cable } from './cable';

export const CircuitBoard = 'Circuit Board';

export const CircuitBoardRecipes: Recipe[] = [
  {
    name: 'Circuit Board',
    default: true,
    produces: [
      {
        item: CircuitBoard,
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
