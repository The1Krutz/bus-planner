import { type Recipe } from '../types';
import { Cable } from './cable';

export const NuclearPasta = 'Nuclear Pasta';

export const NuclearPastaRecipes: Recipe[] = [
  {
    name: 'Nuclear Pasta',
    default: true,
    produces: [
      {
        item: NuclearPasta,
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
