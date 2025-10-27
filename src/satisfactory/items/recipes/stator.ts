import type { Recipe } from '..';
import { Quickwire } from './quickwire';
import { SteelPipe } from './steelPipe';
import { Wire } from './wire';

export const Stator = 'Stator';

export const StatorRecipes: Recipe[] = [
  {
    name: 'Stator',
    default: true,
    produces: [{ item: Stator, rate: 5 }],
    consumes: [
      { item: SteelPipe, rate: 15 },
      { item: Wire, rate: 40 },
    ],
  },
  {
    name: 'Quickwire Stator',
    produces: [{ item: Stator, rate: 8 }],
    consumes: [
      { item: SteelPipe, rate: 16 },
      { item: Quickwire, rate: 60 },
    ],
  },
];
