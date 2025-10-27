import type { Recipe } from '..';
import { FusedModularFrame } from './fusedModularFrame';
import { RadioControlUnit } from './radioControlUnit';

export const PressureConversionCube = 'Pressure Conversion Cube';

export const PressureConversionCubeRecipes: Recipe[] = [
  {
    name: 'Pressure Conversion Cube',
    default: true,
    produces: [{ item: PressureConversionCube, rate: 1 }],
    consumes: [
      { item: FusedModularFrame, rate: 1 },
      { item: RadioControlUnit, rate: 2 },
    ],
  },
];
