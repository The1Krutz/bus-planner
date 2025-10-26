import { type Recipe } from '../types';
import { Cable } from './cable';

export const AdaptiveControlUnit = 'Adaptive Control Unit';

export const AdaptiveControlUnitRecipes: Recipe[] = [
  {
    name: 'Adaptive Control Unit',
    default: true,
    produces: [
      {
        item: AdaptiveControlUnit,
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
