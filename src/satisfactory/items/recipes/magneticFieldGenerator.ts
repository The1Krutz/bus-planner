import type { Recipe } from '..';
import { ElectromagneticControlRod } from './electromagneticControlRod';
import { VersatileFramework } from './versatileFramework';

export const MagneticFieldGenerator = 'Magnetic Field Generator';

export const MagneticFieldGeneratorRecipes: Recipe[] = [
  {
    name: 'Magnetic Field Generator',
    default: true,
    produces: [{ item: MagneticFieldGenerator, rate: 1 }],
    consumes: [
      { item: VersatileFramework, rate: 2.5 },
      { item: ElectromagneticControlRod, rate: 1 },
    ],
  },
];
