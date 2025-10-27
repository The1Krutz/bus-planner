import type { Recipe } from '..';
import { AluminumCasing } from './aluminumCasing';
import { HeavyModularFrame } from './heavyModularFrame';
import {
  AluminumIngot,
  Fuel,
  NitricAcid,
  NitrogenGas,
} from './importOnlyItems';

export const FusedModularFrame = 'Fused Modular Frame';

export const FusedModularFrameRecipes: Recipe[] = [
  {
    name: 'Fused Modular Frame',
    default: true,
    produces: [{ item: FusedModularFrame, rate: 1.5 }],
    consumes: [
      { item: HeavyModularFrame, rate: 1.5 },
      { item: AluminumCasing, rate: 75 },
      { item: NitrogenGas, rate: 37.5 },
    ],
  },
  {
    name: 'Heat Fused Frame',
    produces: [{ item: FusedModularFrame, rate: 3 }],
    consumes: [
      { item: HeavyModularFrame, rate: 3 },
      { item: AluminumIngot, rate: 150 },
      { item: NitricAcid, rate: 24 },
      { item: Fuel, rate: 30 },
    ],
  },
];
