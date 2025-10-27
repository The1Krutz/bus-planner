import type { Recipe } from '..';
import { Concrete } from './importOnlyItems';
import { SteelBeam } from './steelBeam';
import { SteelPipe } from './steelPipe';

export const EncasedIndustrialBeam = 'Encased Industrial Beam';

export const EncasedIndustrialBeamRecipes: Recipe[] = [
  {
    name: 'Encased Industrial Beam',
    default: true,
    produces: [{ item: EncasedIndustrialBeam, rate: 6 }],
    consumes: [
      { item: SteelBeam, rate: 18 },
      { item: Concrete, rate: 36 },
    ],
  },
  {
    name: 'Encased Industrial Pipe',
    produces: [{ item: EncasedIndustrialBeam, rate: 4 }],
    consumes: [
      { item: SteelPipe, rate: 24 },
      { item: Concrete, rate: 20 },
    ],
  },
];
