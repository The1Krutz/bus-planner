import type { Recipe } from '..';
import { Cable } from './cable';

export const FusedModularFrame = 'Fused Modular Frame';

export const FusedModularFrameRecipes: Recipe[] = [
  {
    name: 'Fused Modular Frame',
    default: true,
    produces: [
      {
        item: FusedModularFrame,
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
