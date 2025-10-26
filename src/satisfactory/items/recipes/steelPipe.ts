import type { Recipe } from '..';
import { SteelIngot } from './importOnlyItems';

export const SteelPipe = 'Steel Pipe';

export const SteelPipeRecipes: Recipe[] = [
  {
    name: 'Steel Pipe',
    default: true,
    produces: [
      {
        item: SteelPipe,
        rate: 20,
      },
    ],
    consumes: [
      {
        item: SteelIngot,
        rate: 30,
      },
    ],
  },
  {
    name: 'Iron Pipe',
    produces: [
      {
        item: SteelPipe,
        rate: 20,
      },
    ],
    consumes: [
      {
        item: SteelIngot,
        rate: 30,
      },
    ],
  },
  {
    name: 'Steel Pipe',
    produces: [
      {
        item: SteelPipe,
        rate: 20,
      },
    ],
    consumes: [
      {
        item: SteelIngot,
        rate: 30,
      },
    ],
  },
];
