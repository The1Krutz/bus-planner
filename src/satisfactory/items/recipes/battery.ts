import type { Recipe } from '..';
import { AlcladAluminumSheet } from './alcladAluminumSheet';
import { AluminumCasing } from './aluminumCasing';
import {
  Water,
  SulfuricAcid,
  AluminaSolution,
  Plastic,
  Sulfur,
} from './importOnlyItems';
import { Wire } from './wire';

export const Battery = 'Battery';

export const BatteryRecipes: Recipe[] = [
  {
    name: 'Battery',
    default: true,
    produces: [
      {
        item: Battery,
        rate: 20,
      },
      {
        item: Water,
        rate: 30,
      },
    ],
    consumes: [
      {
        item: SulfuricAcid,
        rate: 50,
      },
      {
        item: AluminaSolution,
        rate: 40,
      },
      {
        item: AluminumCasing,
        rate: 20,
      },
    ],
  },
  {
    name: 'Classic Battery',
    produces: [
      {
        item: Battery,
        rate: 30,
      },
    ],
    consumes: [
      {
        item: Sulfur,
        rate: 45,
      },
      {
        item: AlcladAluminumSheet,
        rate: 52.5,
      },
      {
        item: Plastic,
        rate: 60,
      },
      {
        item: Wire,
        rate: 90,
      },
    ],
  },
];
