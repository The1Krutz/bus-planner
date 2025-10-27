import type { Recipe } from '..';
import { CoolingSystem } from './coolingSystem';
import { ElectromagneticControlRod } from './electromagneticControlRod';
import { PackagedNitrogenGas, Rubber } from './importOnlyItems';
import { Motor } from './motor';
import { PressureConversionCube } from './pressureConversionCube';
import { RadioControlUnit } from './radioControlUnit';
import { Rotor } from './rotor';
import { Stator } from './stator';

export const TurboMotor = 'Turbo Motor';

export const TurboMotorRecipes: Recipe[] = [
  {
    name: 'Turbo Motor',
    default: true,
    produces: [{ item: TurboMotor, rate: 1.875 }],
    consumes: [
      { item: CoolingSystem, rate: 7.5 },
      { item: RadioControlUnit, rate: 3.75 },
      { item: Motor, rate: 7.5 },
      { item: Rubber, rate: 45 },
    ],
  },
  {
    name: 'Turbo Electric Motor',
    produces: [{ item: TurboMotor, rate: 2.8125 }],
    consumes: [
      { item: Motor, rate: 6.5625 },
      { item: RadioControlUnit, rate: 8.4375 },
      { item: ElectromagneticControlRod, rate: 4.6875 },
      { item: Rotor, rate: 6.5625 },
    ],
  },
  {
    name: 'Turbo Pressure Motor',
    produces: [{ item: TurboMotor, rate: 3.75 }],
    consumes: [
      { item: Motor, rate: 7.5 },
      { item: PressureConversionCube, rate: 1.875 },
      { item: PackagedNitrogenGas, rate: 45 },
      { item: Stator, rate: 15 },
    ],
  },
];
