import type { Recipe } from '..';
import { Cable } from './cable';

export const HeatSink = 'Heat Sink';

export const HeatSinkRecipes: Recipe[] = [
  {
    name: 'Heat Sink',
    default: true,
    produces: [
      {
        item: HeatSink,
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
