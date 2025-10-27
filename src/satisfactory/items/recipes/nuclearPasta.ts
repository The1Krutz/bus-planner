import type { Recipe } from '..';

import { CopperPowder } from './copperPowder';
import { PressureConversionCube } from './pressureConversionCube';

export const NuclearPasta = 'Nuclear Pasta';

export const NuclearPastaRecipes: Recipe[] = [
  {
    name: 'Nuclear Pasta',
    default: true,
    produces: [{ item: NuclearPasta, rate: 0.5 }],
    consumes: [
      { item: CopperPowder, rate: 100 },
      { item: PressureConversionCube, rate: 0.5 },
    ],
  },
];
