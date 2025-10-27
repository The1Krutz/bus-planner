import type { Recipe } from '..';
import { CopperIngot } from './importOnlyItems';

export const CopperPowder = 'Copper Powder';

export const CopperPowderRecipes: Recipe[] = [
  {
    name: 'Copper Powder',
    default: true,
    produces: [{ item: CopperPowder, rate: 50 }],
    consumes: [{ item: CopperIngot, rate: 300 }],
  },
];
