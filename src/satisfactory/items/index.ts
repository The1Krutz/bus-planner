import { IronPlate, IronPlateRecipes } from './recipes/ironPlate';
import {
  ReinforcedIronPlate,
  ReinforcedIronPlateRecipes,
} from './recipes/reinforcedIronPlate';
import { IronRod, IronRodRecipes } from './recipes/ironRod';
import { Screws, ScrewsRecipes } from './recipes/screws';
import type { Item, Recipe } from './types';

export const AllRecipes: Recipe[] = [
  ...IronPlateRecipes,
  ...IronRodRecipes,
  ...ReinforcedIronPlateRecipes,
  ...ScrewsRecipes,
];

export const AllItems: Item[] = [
  Screws,
  IronPlate,
  IronRod,
  ReinforcedIronPlate,
];
