import type { Recipe } from '..';
import { DarkMatterCrystal } from './darkMatterCrystal';
import { SingularityCell } from './singularityCell';
import { SuperpositionOscillator } from './superpositionOscillator';
import { ThermalPropulsionRocket } from './thermalPropulsionRocket';

export const BallisticWarpDrive = 'Ballistic Warp Drive';

export const BallisticWarpDriveRecipes: Recipe[] = [
  {
    name: 'Ballistic Warp Drive',
    default: true,
    produces: [{ item: BallisticWarpDrive, rate: 1 }],
    consumes: [
      { item: ThermalPropulsionRocket, rate: 1 },
      { item: SingularityCell, rate: 5 },
      { item: SuperpositionOscillator, rate: 2 },
      { item: DarkMatterCrystal, rate: 40 },
    ],
  },
];
