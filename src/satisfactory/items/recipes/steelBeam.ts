import type { Recipe } from '..';
import { AluminumIngot, Concrete, SteelIngot } from './importOnlyItems';

export const SteelBeam = 'Steel Beam';

export const SteelBeamRecipes: Recipe[] = [
  {
    name: 'Steel Beam',
    default: true,
    produces: [{ item: SteelBeam, rate: 15 }],
    consumes: [{ item: SteelIngot, rate: 60 }],
  },
  {
    name: 'Aluminum Beam',
    produces: [{ item: SteelBeam, rate: 22.5 }],
    consumes: [{ item: AluminumIngot, rate: 22.5 }],
  },
  {
    name: 'Molded Beam',
    produces: [{ item: SteelBeam, rate: 45 }],
    consumes: [
      { item: SteelIngot, rate: 120 },
      { item: Concrete, rate: 80 },
    ],
  },
];
