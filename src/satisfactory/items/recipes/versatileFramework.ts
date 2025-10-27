import type { Recipe } from '..';
import { Rubber } from './importOnlyItems';
import { ModularFrame } from './modularFrame';
import { SteelBeam } from './steelBeam';

export const VersatileFramework = 'Versatile Framework';

export const VersatileFrameworkRecipes: Recipe[] = [
  {
    name: 'Versatile Framework',
    default: true,
    produces: [{ item: VersatileFramework, rate: 5 }],
    consumes: [
      { item: ModularFrame, rate: 2.5 },
      { item: SteelBeam, rate: 30 },
    ],
  },
  {
    name: 'Flexible Framework',
    produces: [{ item: VersatileFramework, rate: 7.5 }],
    consumes: [
      { item: ModularFrame, rate: 3.75 },
      { item: SteelBeam, rate: 22.5 },
      { item: Rubber, rate: 30 },
    ],
  },
];
