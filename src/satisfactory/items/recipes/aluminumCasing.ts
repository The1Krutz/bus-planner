import type { Recipe } from '..';
import { AluminumIngot, CopperIngot } from './importOnlyItems';

export const AluminumCasing = 'Aluminum Casing';

export const AluminumCasingRecipes: Recipe[] = [
  {
    name: 'Aluminum Casing',
    default: true,
    produces: [
      {
        item: AluminumCasing,
        rate: 60,
      },
    ],
    consumes: [
      {
        item: AluminumIngot,
        rate: 90,
      },
    ],
  },
  {
    name: 'Alclad Casing',
    produces: [
      {
        item: AluminumCasing,
        rate: 112.5,
      },
    ],
    consumes: [
      {
        item: AluminumIngot,
        rate: 150,
      },
      {
        item: CopperIngot,
        rate: 75,
      },
    ],
  },
];
