import type { Recipe } from '..';
import { IronRod } from './ironRod';
import { ReinforcedIronPlate } from './reinforcedIronPlate';
import { Screws } from './screws';
import { SteelPipe } from './steelPipe';

export const ModularFrame = 'Modular Frame';

export const ModularFrameRecipes: Recipe[] = [
  {
    name: 'Modular Frame',
    default: true,
    produces: [{ item: ModularFrame, rate: 2 }],
    consumes: [
      { item: ReinforcedIronPlate, rate: 3 },
      { item: IronRod, rate: 12 },
    ],
  },
  {
    name: 'Bolted Frame',
    produces: [{ item: ModularFrame, rate: 5 }],
    consumes: [
      { item: ReinforcedIronPlate, rate: 7.5 },
      { item: Screws, rate: 140 },
    ],
  },
  {
    name: 'Steeled Frame',
    produces: [{ item: ModularFrame, rate: 3 }],
    consumes: [
      { item: ReinforcedIronPlate, rate: 2 },
      { item: SteelPipe, rate: 10 },
    ],
  },
];
