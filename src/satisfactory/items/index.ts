import { IronIngot, IronIngotRecipes } from './recipes/ironIngot';
import { IronPlate, IronPlateRecipes } from './recipes/ironPlate';
import {
  ReinforcedIronPlate,
  ReinforcedIronPlateRecipes,
} from './recipes/reinforcedIronPlate';
import { IronRod, IronRodRecipes } from './recipes/ironRod';
import { Screws, ScrewsRecipes } from './recipes/screws';
import type { Item, Recipe } from './types';

export const AllRecipes: Recipe[] = [
  ...IronIngotRecipes,
  ...IronPlateRecipes,
  ...IronRodRecipes,
  ...ReinforcedIronPlateRecipes,
  ...ScrewsRecipes,
];

export const AllItems: Item[] = [
  Screws,
  IronIngot,
  IronPlate,
  IronRod,
  ReinforcedIronPlate,
];
