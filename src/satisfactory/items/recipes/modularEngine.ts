import { type Recipe } from '../types';
import { Cable } from './cable';

export const ModularEngine = 'Modular Engine';

export const ModularEngineRecipes: Recipe[] = [
  {
    name: 'Modular Engine',
    default: true,
    produces: [
      {
        item: ModularEngine,
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
