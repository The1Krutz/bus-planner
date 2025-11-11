import type { Recipe } from '..';
import { DarkMatterCrystal } from './darkMatterCrystal';
import { Concrete } from './importOnlyItems';
import { IronPlate } from './ironPlate';
import { NuclearPasta } from './nuclearPasta';

export const SingularityCell = 'Singularity Cell';

export const SingularityCellRecipes: Recipe[] = [
  {
    name: 'Singularity Cell',
    default: true,
    produces: [{ item: SingularityCell, rate: 10 }],
    consumes: [
      { item: NuclearPasta, rate: 1 },
      { item: DarkMatterCrystal, rate: 20 },
      { item: IronPlate, rate: 100 },
      { item: Concrete, rate: 200 },
    ],
  },
];
