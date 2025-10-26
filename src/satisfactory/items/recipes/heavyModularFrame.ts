import type { Recipe } from '..';
import { Cable } from './cable';

export const HeavyModularFrame = 'Heavy Modular Frame';

export const HeavyModularFrameRecipes: Recipe[] = [
  {
    name: 'Heavy Modular Frame',
    default: true,
    produces: [
      {
        item: HeavyModularFrame,
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
