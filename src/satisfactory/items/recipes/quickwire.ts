import type { Recipe } from '..';
import { CateriumIngot, CopperIngot } from './importOnlyItems';

export const Quickwire = 'Quickwire';

export const QuickwireRecipes: Recipe[] = [
  {
    name: 'Quickwire',
    default: true,
    produces: [{ item: Quickwire, rate: 60 }],
    consumes: [{ item: CateriumIngot, rate: 12 }],
  },
  {
    name: 'Fused Quickwire',
    produces: [{ item: Quickwire, rate: 90 }],
    consumes: [
      { item: CateriumIngot, rate: 7.5 },
      { item: CopperIngot, rate: 37.5 },
    ],
  },
];
