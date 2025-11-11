import type { Recipe } from '..';
import { AssemblyDirectorSystem } from './assemblyDirectorSystem';
import { FicsiteTrigon } from './ficsiteTrigon';
import { Water } from './importOnlyItems';

export const BiochemicalSculptor = 'BiochemicalSculptor';

export const BiochemicalSculptorRecipes: Recipe[] = [
  {
    name: 'BiochemicalSculptor',
    default: true,
    produces: [{ item: BiochemicalSculptor, rate: 2 }],
    consumes: [
      { item: AssemblyDirectorSystem, rate: 0.5 },
      { item: FicsiteTrigon, rate: 40 },
      { item: Water, rate: 10 },
    ],
  },
];
