import { type Recipe } from '../types';
import { Cable } from './cable';

export const AiLimiter = 'AI Limiter';

export const AiLimiterRecipes: Recipe[] = [
  {
    name: 'AI Limiter',
    default: true,
    produces: [
      {
        item: AiLimiter,
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
