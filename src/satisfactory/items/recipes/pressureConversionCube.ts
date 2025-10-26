import { type Recipe } from '../types';
import { Cable } from './cable';

export const PressureConversionCube = 'Pressure Conversion Cube';

export const PressureConversionCubeRecipes: Recipe[] = [
  {
    name: 'Pressure Conversion Cube',
    default: true,
    produces: [
      {
        item: PressureConversionCube,
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
