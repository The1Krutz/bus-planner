import { IronOre } from './nonProductionItems';
import { type Recipe } from '../types';

export const IronIngot = 'Iron Ingot';

export const IronIngotRecipes: Recipe[] = [
  {
    name: 'Iron Ingot',
    produces: [
      {
        item: IronIngot,
        rate: 30,
      },
    ],
    consumes: [
      {
        item: IronOre,
        rate: 30,
      },
    ],
  },
];
