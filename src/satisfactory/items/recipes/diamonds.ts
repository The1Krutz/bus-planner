import type { Recipe } from '..';
import {
  Coal,
  CrudeOil,
  Limestone,
  PackagedTurbofuel,
  PetroleumCoke,
  QuartzCrystal,
} from './importOnlyItems';

export const Diamonds = 'Diamonds';

export const DiamondsRecipes: Recipe[] = [
  {
    name: 'Diamonds',
    default: true,
    produces: [{ item: Diamonds, rate: 30 }],
    consumes: [{ item: Coal, rate: 600 }],
  },
  {
    name: 'Cloudy Diamonds',
    produces: [{ item: Diamonds, rate: 20 }],
    consumes: [
      { item: Coal, rate: 240 },
      { item: Limestone, rate: 480 },
    ],
  },
  {
    name: 'Oil Based Diamonds',
    produces: [{ item: Diamonds, rate: 40 }],
    consumes: [{ item: CrudeOil, rate: 200 }],
  },
  {
    name: 'Petroleum Diamonds',
    produces: [{ item: Diamonds, rate: 30 }],
    consumes: [{ item: PetroleumCoke, rate: 720 }],
  },
  {
    name: 'Pink Diamonds',
    produces: [{ item: Diamonds, rate: 15 }],
    consumes: [
      { item: Coal, rate: 120 },
      { item: QuartzCrystal, rate: 45 },
    ],
  },
  {
    name: 'Turbo Diamonds',
    produces: [{ item: Diamonds, rate: 60 }],
    consumes: [
      { item: Coal, rate: 600 },
      { item: PackagedTurbofuel, rate: 40 },
    ],
  },
];
