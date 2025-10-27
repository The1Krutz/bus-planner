import { IronRod } from './ironRod';
import type { Recipe } from '..';
import { IronIngot } from './importOnlyItems';
import { SteelBeam } from './steelBeam';

export const Screws = 'Screws';

export const ScrewsRecipes: Recipe[] = [
  {
    name: 'Screws',
    default: true,
    produces: [{ item: Screws, rate: 40 }],
    consumes: [{ item: IronRod, rate: 10 }],
  },
  {
    name: 'Cast Screws',
    produces: [{ item: Screws, rate: 50 }],
    consumes: [{ item: IronIngot, rate: 12.5 }],
  },
  {
    name: 'Steel Screws',
    produces: [{ item: Screws, rate: 260 }],
    consumes: [{ item: SteelBeam, rate: 5 }],
  },
];
