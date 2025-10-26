import { type Recipe } from '../types';
import { Cable } from './cable';

export const TurboMotor = 'Turbo Motor';

export const TurboMotorRecipes: Recipe[] = [
  {
    name: 'Turbo Motor',
    default: true,
    produces: [
      {
        item: TurboMotor,
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
