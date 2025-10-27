import type { Recipe } from '..';
import { CopperSheet } from './copperSheet';
import { PetroleumCoke, Plastic, Rubber, Silica } from './importOnlyItems';
import { Quickwire } from './quickwire';

export const CircuitBoard = 'Circuit Board';

export const CircuitBoardRecipes: Recipe[] = [
  {
    name: 'Circuit Board',
    default: true,
    produces: [{ item: CircuitBoard, rate: 7.5 }],
    consumes: [
      { item: CopperSheet, rate: 15 },
      { item: Plastic, rate: 30 },
    ],
  },
  {
    name: 'Caterium Circuit Board',
    produces: [{ item: CircuitBoard, rate: 8.75 }],
    consumes: [
      { item: Plastic, rate: 12.5 },
      { item: Quickwire, rate: 37.5 },
    ],
  },
  {
    name: 'Electrode Circuit Board',
    produces: [{ item: CircuitBoard, rate: 5 }],
    consumes: [
      { item: Rubber, rate: 20 },
      { item: PetroleumCoke, rate: 40 },
    ],
  },
  {
    name: 'Silicon Circuit Board',
    produces: [{ item: CircuitBoard, rate: 12.5 }],
    consumes: [
      { item: CopperSheet, rate: 27.5 },
      { item: Silica, rate: 27.5 },
    ],
  },
];
