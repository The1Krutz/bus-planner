import type { Recipe } from '..';
import { Diamonds } from './diamonds';

export const TimeCrystal = 'Time Crystal';

export const TimeCrystalRecipes: Recipe[] = [
  {
    name: 'Time Crystal',
    default: true,
    produces: [{ item: TimeCrystal, rate: 6 }],
    consumes: [{ item: Diamonds, rate: 12 }],
  },
];
