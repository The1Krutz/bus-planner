import { IronPlate } from './ironPlate';
import { Screws } from './screws';
import type { Recipe } from '..';
import { Rubber } from './importOnlyItems';
import { Wire } from './wire';

export const ReinforcedIronPlate = 'Reinforced Iron Plate';

export const ReinforcedIronPlateRecipes: Recipe[] = [
  {
    name: 'Reinforced Iron Plate',
    default: true,
    produces: [{ item: ReinforcedIronPlate, rate: 5 }],
    consumes: [
      { item: IronPlate, rate: 30 },
      { item: Screws, rate: 60 },
    ],
  },
  {
    name: 'Adhered Iron Plate',
    produces: [{ item: ReinforcedIronPlate, rate: 3.75 }],
    consumes: [
      { item: IronPlate, rate: 11.25 },
      { item: Rubber, rate: 3.75 },
    ],
  },
  {
    name: 'Bolted Iron Plate',
    produces: [{ item: ReinforcedIronPlate, rate: 15 }],
    consumes: [
      { item: IronPlate, rate: 90 },
      { item: Screws, rate: 250 },
    ],
  },
  {
    name: 'Stitched Iron Plate',
    produces: [{ item: ReinforcedIronPlate, rate: 5.625 }],
    consumes: [
      { item: IronPlate, rate: 10 },
      { item: Wire, rate: 37.5 },
    ],
  },
];
