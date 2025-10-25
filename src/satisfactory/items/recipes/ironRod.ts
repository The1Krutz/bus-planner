import { type Recipe } from '../types';
import { IronIngot } from './nonBusItems';

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
