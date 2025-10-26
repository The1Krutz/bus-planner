import type { Recipe } from '..';
import { Cable } from './cable';

export const SuperpositionOscillator = 'Superpostion Oscillator';

export const SuperpositionOscillatorRecipes: Recipe[] = [
  {
    name: 'Superpostion Oscillator',
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
