import { type Recipe } from '../types';
import { CateriumIngot, CopperIngot } from './importOnlyItems';

export const Wire = 'Wire';

export const WireRecipes: Recipe[] = [
  {
    name: 'Wire',
    default: true,
    produces: [
      {
        item: Wire,
        rate: 30,
      },
    ],
    consumes: [
      {
        item: CopperIngot,
        rate: 15,
      },
    ],
  },
  {
    name: 'Caterium Wire',
    produces: [
      {
        item: Wire,
        rate: 120,
      },
    ],
    consumes: [
      {
        item: CateriumIngot,
        rate: 15,
      },
    ],
  },
];
