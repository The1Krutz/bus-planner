import type { Recipe } from '..';
import { AiLimiter } from './aiLimiter';
import { Cable } from './cable';
import { QuartzCrystal, Rubber } from './importOnlyItems';
import { ReinforcedIronPlate } from './reinforcedIronPlate';

export const CrystalOscillator = 'Crystal Oscillator';

export const CrystalOscillatorRecipes: Recipe[] = [
  {
    name: 'Crystal Oscillator',
    default: true,
    produces: [{ item: CrystalOscillator, rate: 1 }],
    consumes: [
      { item: QuartzCrystal, rate: 18 },
      { item: Cable, rate: 14 },
      { item: ReinforcedIronPlate, rate: 2.5 },
    ],
  },
  {
    name: 'Insulated Crystal Oscillator',
    produces: [{ item: CrystalOscillator, rate: 1.875 }],
    consumes: [
      { item: QuartzCrystal, rate: 18.75 },
      { item: Rubber, rate: 13.125 },
      { item: AiLimiter, rate: 1.875 },
    ],
  },
];
