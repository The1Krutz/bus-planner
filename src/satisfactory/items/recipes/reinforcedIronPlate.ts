import { IronPlate } from './ironPlate';
import { Screws } from './screws';
import { type Recipe } from '../types';

export const ReinforcedIronPlate = 'Reinforced Iron Plate';

export const ReinforcedIronPlateRecipes: Recipe[] = [
  {
    name: 'Reinforced Iron Plate',
    default: true,
    produces: [
      {
        item: ReinforcedIronPlate,
        rate: 5,
      },
    ],
    consumes: [
      {
        item: IronPlate,
        rate: 30,
      },
      {
        item: Screws,
        rate: 60,
      },
    ],
  },
  /**
   * TODO - the rest of them
   */
];
