import type { Recipe } from '..';
import { AdaptiveControlUnit } from './adaptiveControlUnit';
import { Supercomputer } from './supercomputer';

export const AssemblyDirectorSystem = 'Assembly Director System';

export const AssemblyDirectorSystemRecipes: Recipe[] = [
  {
    name: 'Assembly Director System',
    default: true,
    produces: [
      {
        item: AssemblyDirectorSystem,
        rate: 0.75,
      },
    ],
    consumes: [
      {
        item: AdaptiveControlUnit,
        rate: 1.5,
      },
      {
        item: Supercomputer,
        rate: 0.75,
      },
    ],
  },
];
