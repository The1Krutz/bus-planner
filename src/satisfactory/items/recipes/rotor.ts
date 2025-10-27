import type { Recipe } from '..';
import { CopperSheet } from './copperSheet';
import { IronRod } from './ironRod';
import { Screws } from './screws';
import { SteelPipe } from './steelPipe';
import { Wire } from './wire';

export const Rotor = 'Rotor';

export const RotorRecipes: Recipe[] = [
  {
    name: 'Rotor',
    default: true,
    produces: [{ item: Rotor, rate: 4 }],
    consumes: [
      { item: IronRod, rate: 20 },
      { item: Screws, rate: 100 },
    ],
  },
  {
    name: 'Copper Rotor',
    produces: [{ item: Rotor, rate: 11.25 }],
    consumes: [
      { item: CopperSheet, rate: 22.5 },
      { item: Screws, rate: 195 },
    ],
  },
  {
    name: 'Steel Rotor',
    produces: [{ item: Rotor, rate: 5 }],
    consumes: [
      { item: SteelPipe, rate: 10 },
      { item: Wire, rate: 30 },
    ],
  },
];
