import type { Recipe } from '..';
import { CoolingSystem } from './coolingSystem';
import { FusedModularFrame } from './fusedModularFrame';
import { ModularEngine } from './modularEngine';
import { TurboMotor } from './turboMotor';

export const ThermalPropulsionRocket = 'Thermal Propulsion Rocket';

export const ThermalPropulsionRocketRecipes: Recipe[] = [
  {
    name: 'Thermal Propulsion Rocket',
    default: true,
    produces: [{ item: ThermalPropulsionRocket, rate: 1 }],
    consumes: [
      { item: ModularEngine, rate: 2.5 },
      { item: TurboMotor, rate: 1 },
      { item: CoolingSystem, rate: 3 },
      { item: FusedModularFrame, rate: 1 },
    ],
  },
];
