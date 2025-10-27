import type { Recipe } from '..';
import { FicsiteIngot } from './ficsiteIngot';

export const FicsiteTrigon = 'Ficsite Trigon';

export const FicsiteTrigonRecipes: Recipe[] = [
  {
    name: 'Ficsite Trigon',
    default: true,
    produces: [{ item: FicsiteTrigon, rate: 30 }],
    consumes: [{ item: FicsiteIngot, rate: 10 }],
  },
];
