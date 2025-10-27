import type { Recipe } from '..';
import { HeavyOilResidue, Rubber } from './importOnlyItems';
import { Quickwire } from './quickwire';
import { Wire } from './wire';

export const Cable = 'Cable';

export const CableRecipes: Recipe[] = [
  {
    name: 'Cable',
    default: true,
    produces: [{ item: Cable, rate: 30 }],
    consumes: [{ item: Wire, rate: 60 }],
  },
  {
    name: 'Coated Cable',
    produces: [{ item: Cable, rate: 67.5 }],
    consumes: [
      { item: Wire, rate: 37.5 },
      { item: HeavyOilResidue, rate: 15 },
    ],
  },
  {
    name: 'Insulated Cable',
    produces: [{ item: Cable, rate: 100 }],
    consumes: [
      { item: Wire, rate: 45 },
      { item: Rubber, rate: 30 },
    ],
  },
  {
    name: 'Quickwire Cable',
    produces: [{ item: Cable, rate: 27.5 }],
    consumes: [
      { item: Quickwire, rate: 7.5 },
      { item: Rubber, rate: 5 },
    ],
  },
];
