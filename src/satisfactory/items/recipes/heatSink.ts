import type { Recipe } from '..';
import { AlcladAluminumSheet } from './alcladAluminumSheet';
import { AluminumCasing } from './aluminumCasing';
import { CopperSheet } from './copperSheet';
import { Rubber } from './importOnlyItems';

export const HeatSink = 'Heat Sink';

export const HeatSinkRecipes: Recipe[] = [
  {
    name: 'Heat Sink',
    default: true,
    produces: [{ item: HeatSink, rate: 7.5 }],
    consumes: [
      { item: AlcladAluminumSheet, rate: 37.5 },
      { item: CopperSheet, rate: 22.5 },
    ],
  },
  {
    name: 'Heat Exchanger',
    produces: [{ item: HeatSink, rate: 10 }],
    consumes: [
      { item: AluminumCasing, rate: 30 },
      { item: Rubber, rate: 30 },
    ],
  },
];
