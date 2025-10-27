import type { Recipe } from '..';
import { HeatSink } from './heatSink';
import { NitrogenGas, Rubber, Water } from './importOnlyItems';
import { Motor } from './motor';

export const CoolingSystem = 'Cooling System';

export const CoolingSystemRecipes: Recipe[] = [
  {
    name: 'Cooling System',
    default: true,
    produces: [{ item: CoolingSystem, rate: 6 }],
    consumes: [
      { item: HeatSink, rate: 12 },
      { item: Rubber, rate: 12 },
      { item: Water, rate: 30 },
      { item: NitrogenGas, rate: 150 },
    ],
  },
  {
    name: 'Cooling Device',
    produces: [{ item: CoolingSystem, rate: 5 }],
    consumes: [
      { item: HeatSink, rate: 10 },
      { item: Motor, rate: 2.5 },
      { item: NitrogenGas, rate: 60 },
    ],
  },
];
