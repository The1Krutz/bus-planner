import type { Recipe } from '..';
import { ReanimatedSam } from './importOnlyItems';
import { SteelPipe } from './steelPipe';
import { Wire } from './wire';

export const SamFluctuator = 'SAM Fluctuator';

export const SamFluctuatorRecipes: Recipe[] = [
  {
    name: 'SAM Fluctuator',
    default: true,
    produces: [{ item: SamFluctuator, rate: 10 }],
    consumes: [
      { item: ReanimatedSam, rate: 60 },
      { item: Wire, rate: 50 },
      { item: SteelPipe, rate: 30 },
    ],
  },
];
