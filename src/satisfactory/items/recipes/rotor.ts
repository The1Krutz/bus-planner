import { type Recipe } from '../types';
import { Cable } from './cable';

export const Rotor = 'Rotor';

export const RotorRecipes: Recipe[] = [
  {
    name: 'Rotor',
    default: true,
    produces: [
      {
        item: Rotor,
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
