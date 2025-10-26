import { type Recipe } from '../types';
import { SteelIngot } from './importOnlyItems';

export const SteelPipe = 'Steel Pipe';

export const SteelPipeRecipes: Recipe[] = [
  {
    name: 'Steel Pipe',
    default: true,
    produces: [
      {
        item: SteelPipe,
        rate: 15,
      },
    ],
    consumes: [
      {
        item: SteelIngot,
        rate: 60,
      },
    ],
  },
];
