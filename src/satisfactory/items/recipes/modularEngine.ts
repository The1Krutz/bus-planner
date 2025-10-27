import type { Recipe } from '..';
import { Rubber } from './importOnlyItems';
import { Motor } from './motor';
import { SmartPlating } from './smartPlating';

export const ModularEngine = 'Modular Engine';

export const ModularEngineRecipes: Recipe[] = [
  {
    name: 'Modular Engine',
    default: true,
    produces: [{ item: ModularEngine, rate: 1 }],
    consumes: [
      { item: Motor, rate: 2 },
      { item: Rubber, rate: 15 },
      { item: SmartPlating, rate: 2 },
    ],
  },
];
