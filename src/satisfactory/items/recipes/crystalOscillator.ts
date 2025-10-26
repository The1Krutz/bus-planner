import { type Recipe } from '../types';
import { Cable } from './cable';

export const CrystalOscillator = 'Crystal Oscillator';

export const CrystalOscillatorRecipes: Recipe[] = [
  {
    name: 'Crystal Oscillator',
    default: true,
    produces: [
      {
        item: CrystalOscillator,
        rate: 0,
      },
    ],
    consumes: [
      {
        item: Cable,
        rate: 0,
      },
    ],
  },
];
