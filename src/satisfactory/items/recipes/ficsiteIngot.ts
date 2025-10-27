import type { Recipe } from '..';
import {
  AluminumIngot,
  CateriumIngot,
  IronIngot,
  ReanimatedSam,
} from './importOnlyItems';

export const FicsiteIngot = 'Ficsite Ingot';

export const FicsiteIngotRecipes: Recipe[] = [
  {
    name: 'Ficsite Ingot (Aluminum)',
    default: true,
    produces: [{ item: FicsiteIngot, rate: 30 }],
    consumes: [
      { item: ReanimatedSam, rate: 60 },
      { item: AluminumIngot, rate: 120 },
    ],
  },
  {
    name: 'Ficsite Ingot (Caterium)',
    produces: [{ item: FicsiteIngot, rate: 15 }],
    consumes: [
      { item: ReanimatedSam, rate: 45 },
      { item: CateriumIngot, rate: 60 },
    ],
  },
  {
    name: 'Ficsite Ingot (Iron)',
    produces: [{ item: FicsiteIngot, rate: 10 }],
    consumes: [
      { item: ReanimatedSam, rate: 40 },
      { item: IronIngot, rate: 240 },
    ],
  },
];
