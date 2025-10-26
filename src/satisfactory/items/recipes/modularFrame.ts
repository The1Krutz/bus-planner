import { type Recipe } from '../types';
import { Cable } from './cable';

export const ModularFrame = 'Modular Frame';

export const ModularFrameRecipes: Recipe[] = [
  {
    name: 'Modular Frame',
    default: true,
    produces: [
      {
        item: ModularFrame,
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
