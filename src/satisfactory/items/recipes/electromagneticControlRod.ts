import type { Recipe } from '..';
import { AiLimiter } from './aiLimiter';
import { HighSpeedConnector } from './highSpeedConnector';
import { Stator } from './stator';

export const ElectromagneticControlRod = 'Electromagnetic Control Rod';

export const ElectromagneticControlRodRecipes: Recipe[] = [
  {
    name: 'Electromagnetic Control Rod',
    default: true,
    produces: [{ item: ElectromagneticControlRod, rate: 4 }],
    consumes: [
      { item: Stator, rate: 6 },
      { item: AiLimiter, rate: 4 },
    ],
  },
  {
    name: 'Electromagnetic Connection Rod',
    produces: [{ item: ElectromagneticControlRod, rate: 8 }],
    consumes: [
      { item: Stator, rate: 8 },
      { item: HighSpeedConnector, rate: 4 },
    ],
  },
];
