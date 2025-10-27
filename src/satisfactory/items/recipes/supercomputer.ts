import type { Recipe } from '..';
import { AiLimiter } from './aiLimiter';
import { Battery } from './battery';
import { Computer } from './computer';
import { CoolingSystem } from './coolingSystem';
import { ElectromagneticControlRod } from './electromagneticControlRod';
import { HighSpeedConnector } from './highSpeedConnector';
import { Plastic } from './importOnlyItems';
import { RadioControlUnit } from './radioControlUnit';
import { Wire } from './wire';

export const Supercomputer = 'Supercomputer';

export const SupercomputerRecipes: Recipe[] = [
  {
    name: 'Supercomputer',
    default: true,
    produces: [{ item: Supercomputer, rate: 1.875 }],
    consumes: [
      { item: Computer, rate: 7.5 },
      { item: AiLimiter, rate: 3.75 },
      { item: HighSpeedConnector, rate: 5.625 },
      { item: Plastic, rate: 52.5 },
    ],
  },
  {
    name: 'OC Supercomputer',
    produces: [{ item: Supercomputer, rate: 3 }],
    consumes: [
      { item: RadioControlUnit, rate: 6 },
      { item: CoolingSystem, rate: 6 },
    ],
  },
  {
    name: 'Super State Computer',
    produces: [{ item: Supercomputer, rate: 2.4 }],
    consumes: [
      { item: Computer, rate: 7.2 },
      { item: ElectromagneticControlRod, rate: 2.4 },
      { item: Battery, rate: 24 },
      { item: Wire, rate: 60 },
    ],
  },
];
