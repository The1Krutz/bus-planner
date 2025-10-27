import type { Recipe } from '..';
import { Diamonds } from './diamonds';
import { DarkMatterResidue } from './importOnlyItems';
import { TimeCrystal } from './timeCrystal';

export const DarkMatterCrystal = 'Dark Matter Crystal';

export const DarkMatterCrystalRecipes: Recipe[] = [
  {
    name: 'Dark Matter Crystal',
    default: true,
    produces: [{ item: DarkMatterCrystal, rate: 30 }],
    consumes: [
      { item: Diamonds, rate: 30 },
      { item: DarkMatterResidue, rate: 150 },
    ],
  },
  {
    name: 'Dark Matter Crystalization',
    produces: [{ item: DarkMatterCrystal, rate: 20 }],
    consumes: [{ item: DarkMatterResidue, rate: 200 }],
  },
  {
    name: 'Dark Matter Trap',
    produces: [{ item: DarkMatterCrystal, rate: 60 }],
    consumes: [
      { item: TimeCrystal, rate: 30 },
      { item: DarkMatterResidue, rate: 150 },
    ],
  },
];
