import type { Recipe } from '..';
import { Plastic } from './importOnlyItems';
import { ReinforcedIronPlate } from './reinforcedIronPlate';
import { Rotor } from './rotor';

export const SmartPlating = 'Smart Plating';

export const SmartPlatingRecipes: Recipe[] = [
  {
    name: 'Smart Plating',
    default: true,
    produces: [{ item: SmartPlating, rate: 2 }],
    consumes: [
      { item: ReinforcedIronPlate, rate: 2 },
      { item: Rotor, rate: 2 },
    ],
  },
  {
    name: 'Plastic Smart Plating',
    produces: [{ item: SmartPlating, rate: 5 }],
    consumes: [
      { item: ReinforcedIronPlate, rate: 2.5 },
      { item: Rotor, rate: 2.5 },
      { item: Plastic, rate: 7.5 },
    ],
  },
];
