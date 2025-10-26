import { type Recipe } from '../types';
import { Cable } from './cable';

export const Motor = 'Motor';

export const MotorRecipes: Recipe[] = [
  {
    name: 'Motor',
    default: true,
    produces: [
      {
        item: Motor,
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
