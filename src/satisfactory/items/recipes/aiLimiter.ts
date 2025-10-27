import type { Recipe } from '..';
import { CopperSheet } from './copperSheet';
import { Plastic } from './importOnlyItems';
import { Quickwire } from './quickwire';

export const AiLimiter = 'AI Limiter';

export const AiLimiterRecipes: Recipe[] = [
  {
    name: 'AI Limiter',
    default: true,
    produces: [
      {
        item: AiLimiter,
        rate: 5,
      },
    ],
    consumes: [
      {
        item: CopperSheet,
        rate: 25,
      },
      {
        item: Quickwire,
        rate: 100,
      },
    ],
  },
  {
    name: 'Plastic AI Limiter',
    produces: [
      {
        item: AiLimiter,
        rate: 8,
      },
    ],
    consumes: [
      {
        item: Quickwire,
        rate: 120,
      },
      {
        item: Plastic,
        rate: 28,
      },
    ],
  },
];
