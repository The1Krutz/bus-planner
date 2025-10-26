import type { Recipe } from '..';
import { Cable } from './cable';

export const AssemblyDirectorSystem = 'Assembly Director System';

export const AssemblyDirectorSystemRecipes: Recipe[] = [
  {
    name: 'Assembly Director System',
    default: true,
    produces: [
      {
        item: AssemblyDirectorSystem,
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
