import type { Recipe } from '..';
import { EncasedIndustrialBeam } from './encasedIndustrialBeam';
import { Concrete, Rubber } from './importOnlyItems';
import { ModularFrame } from './modularFrame';
import { Screws } from './screws';
import { SteelPipe } from './steelPipe';

export const HeavyModularFrame = 'Heavy Modular Frame';

export const HeavyModularFrameRecipes: Recipe[] = [
  {
    name: 'Heavy Modular Frame',
    default: true,
    produces: [{ item: HeavyModularFrame, rate: 2 }],
    consumes: [
      { item: ModularFrame, rate: 10 },
      { item: SteelPipe, rate: 40 },
      { item: EncasedIndustrialBeam, rate: 10 },
      { item: Screws, rate: 240 },
    ],
  },
  {
    name: 'Heavy Encased Frame',
    produces: [{ item: HeavyModularFrame, rate: 2.8125 }],
    consumes: [
      { item: ModularFrame, rate: 7.5 },
      { item: EncasedIndustrialBeam, rate: 9.375 },
      { item: SteelPipe, rate: 33.75 },
      { item: Concrete, rate: 20.625 },
    ],
  },
  {
    name: 'Heavy Flexible Frame',
    produces: [{ item: HeavyModularFrame, rate: 3.75 }],
    consumes: [
      { item: ModularFrame, rate: 18.75 },
      { item: EncasedIndustrialBeam, rate: 11.25 },
      { item: Rubber, rate: 75 },
      { item: Screws, rate: 390 },
    ],
  },
];
