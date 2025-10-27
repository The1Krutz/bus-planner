import type { Recipe } from '..';
import { IronIngot, Plastic, SteelIngot } from './importOnlyItems';

export const IronPlate = 'Iron Plate';

export const IronPlateRecipes: Recipe[] = [
  {
    name: 'Iron Plate',
    default: true,
    produces: [{ item: IronPlate, rate: 20 }],
    consumes: [{ item: IronIngot, rate: 30 }],
  },
  {
    name: 'Coated Iron Plate',
    produces: [{ item: IronPlate, rate: 75 }],
    consumes: [
      { item: IronIngot, rate: 37.5 },
      { item: Plastic, rate: 7.5 },
    ],
  },
  {
    name: 'Steel Cast Plate',
    produces: [{ item: IronPlate, rate: 45 }],
    consumes: [
      { item: IronIngot, rate: 15 },
      { item: SteelIngot, rate: 15 },
    ],
  },
];
