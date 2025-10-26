import { type Recipe } from '../types';
import { Cable } from './cable';

export const Quickwire = 'Quickwire';

export const QuickwireRecipes: Recipe[] = [
  {
    name: 'Quickwire',
    default: true,
    produces: [
      {
        item: Quickwire,
        rate: 0,
      },
    ],
    consumes: [
      {
        item: Cable,
        rate: 0,
      },
    ],
  },
];
