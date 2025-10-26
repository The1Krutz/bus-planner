import { type Recipe } from '../types';
import { AluminumIngot, IronIngot, SteelIngot } from './importOnlyItems';

export const IronRod = 'Iron Rod';

export const IronRodRecipes: Recipe[] = [
  {
    name: 'Iron Rod',
    default:true,
    produces: [
      {
        item: IronRod,
        rate: 15,
      },
    ],
    consumes: [
      {
        item: IronIngot,
        rate: 15,
      },
    ],
  },
  {
    name: 'AAluminum Rod',
    produces: [
      {
        item: IronRod,
        rate: 52.5,
      },
    ],
    consumes: [
      {
        item: AluminumIngot,
        rate: 7.5,
      },
    ],
  },
  {
    name: 'Steel Rod',
    produces: [
      {
        item: IronRod,
        rate: 48,
      },
    ],
    consumes: [
      {
        item: SteelIngot,
        rate: 12,
      },
    ],
  },
];
