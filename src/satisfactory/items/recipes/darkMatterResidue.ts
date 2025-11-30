import type { Recipe } from '..';
import { ReanimatedSam } from './importOnlyItems';

export const DarkMatterResidue = 'Dark Matter Residue';

export const DarkMatterResidueRecipes: Recipe[] = [
  {
    name: 'Dark Matter Residue',
    default: true,
    produces: [{ item: DarkMatterResidue, rate: 100 }],
    consumes: [{ item: ReanimatedSam, rate: 50 }],
  },
];
