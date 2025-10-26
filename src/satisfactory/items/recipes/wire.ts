import { type Recipe } from '../types';
import { CateriumIngot, CopperIngot, IronIngot } from './importOnlyItems';

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
  {
    name: 'Fused Wire',
    produces: [
      {
        item: Wire,
        rate: 90,
      },
    ],
    consumes: [
      {
        item: CopperIngot,
        rate: 12,
      },
      {
        item: CateriumIngot,
        rate: 3,
      },
    ],
  },
  {
    name: 'Iron Wire',
    produces: [
      {
        item: Wire,
        rate: 22.5,
      },
    ],
    consumes: [
      {
        item: IronIngot,
        rate: 12.5,
      },
    ],
  },
];
