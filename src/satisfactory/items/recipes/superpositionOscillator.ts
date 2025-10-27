import type { Recipe } from '..';
import { Cable } from './cable';

export const SuperpositionOscillator = 'Superposition Oscillator';

export const SuperpositionOscillatorRecipes: Recipe[] = [
  {
    name: 'Superposition Oscillator',
    default: true,
    produces: [
      {
        item: SuperpositionOscillator,
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
