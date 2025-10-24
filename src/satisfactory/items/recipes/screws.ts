import { IronIngot } from './ironIngot';
import { IronRod } from './ironRod';
import { type Recipe } from '../types';

export const Screws = 'Screws';

export const ScrewsRecipes: Recipe[] = [
  {
    name: 'Screws',
    produces: [
      {
        item: Screws,
        rate: 40,
      },
    ],
    consumes: [
      {
        item: IronRod,
        rate: 10,
      },
    ],
  },
  {
    name: 'Cast Screws',
    produces: [
      {
        item: Screws,
        rate: 50,
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
