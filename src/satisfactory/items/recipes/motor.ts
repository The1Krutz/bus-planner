import type { Recipe } from '..';
import { CrystalOscillator } from './crystalOscillator';
import { ElectromagneticControlRod } from './electromagneticControlRod';
import { Rotor } from './rotor';
import { Stator } from './stator';

export const Motor = 'Motor';

export const MotorRecipes: Recipe[] = [
  {
    name: 'Motor',
    default: true,
    produces: [{ item: Motor, rate: 5 }],
    consumes: [
      { item: Rotor, rate: 10 },
      { item: Stator, rate: 10 },
    ],
  },
  {
    name: 'Electric Motor',
    produces: [{ item: Motor, rate: 7.5 }],
    consumes: [
      { item: ElectromagneticControlRod, rate: 3.75 },
      { item: Rotor, rate: 7.5 },
    ],
  },
  {
    name: 'Rigor Motor',
    produces: [{ item: Motor, rate: 7.5 }],
    consumes: [
      { item: Rotor, rate: 3.75 },
      { item: Stator, rate: 3.75 },
      { item: CrystalOscillator, rate: 1.25 },
    ],
  },
];
