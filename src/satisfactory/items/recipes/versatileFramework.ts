import { type Recipe } from '../types';
import { Cable } from './cable';

export const VersatileFramework = 'Versatile Framework';

export const VersatileFrameworkRecipes: Recipe[] = [
  {
    name: 'Versatile Framework',
    default: true,
    produces: [
      {
        item: VersatileFramework,
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
