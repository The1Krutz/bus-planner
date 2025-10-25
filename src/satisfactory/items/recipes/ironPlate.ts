import { IronIngot } from './ironIngot';
import { type Recipe } from '../types';

export const IronPlate = 'Iron Plate';

export const IronPlateRecipes: Recipe[] = [
  {
    name: 'Iron Plate',
    default:true,
    produces: [
      {
        item: IronPlate,
        rate: 20,
      },
    ],
    consumes: [
      {
        item: IronIngot,
        rate: 30,
      },
    ],
  },
];
