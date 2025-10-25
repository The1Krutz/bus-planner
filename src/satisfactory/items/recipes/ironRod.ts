import { IronIngot } from './ironIngot';
import { type Recipe } from '../types';

export const IronRod = 'Iron Rod';

export const IronRodRecipes: Recipe[] = [
  {
    name: 'Iron Rod',
    default:true,
    produces: [
      {
        item: IronRod,
        rate: 15,
      },
    ],
    consumes: [
      {
        item: IronIngot,
        rate: 15,
      },
    ],
  },
];
