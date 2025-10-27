import type { Recipe } from '..';
import { AluminumCasing } from './aluminumCasing';
import { CircuitBoard } from './circuitBoard';
import { Computer } from './computer';
import { CrystalOscillator } from './crystalOscillator';
import { HeatSink } from './heatSink';
import { HighSpeedConnector } from './highSpeedConnector';
import { QuartzCrystal, Rubber } from './importOnlyItems';

export const RadioControlUnit = 'Radio Control Unit';

export const RadioControlUnitRecipes: Recipe[] = [
  {
    name: 'Radio Control Unit',
    default: true,
    produces: [{ item: RadioControlUnit, rate: 2.5 }],
    consumes: [
      { item: AluminumCasing, rate: 40 },
      { item: CrystalOscillator, rate: 1.25 },
      { item: Computer, rate: 2.5 },
    ],
  },
  {
    name: 'Radio Connection Unit',
    produces: [{ item: RadioControlUnit, rate: 3.75 }],
    consumes: [
      { item: HeatSink, rate: 15 },
      { item: HighSpeedConnector, rate: 7.5 },
      { item: QuartzCrystal, rate: 45 },
    ],
  },
  {
    name: 'Radio Control System',
    produces: [{ item: RadioControlUnit, rate: 4.5 }],
    consumes: [
      { item: CrystalOscillator, rate: 1.5 },
      { item: CircuitBoard, rate: 15 },
      { item: AluminumCasing, rate: 90 },
      { item: Rubber, rate: 45 },
    ],
  },
];
