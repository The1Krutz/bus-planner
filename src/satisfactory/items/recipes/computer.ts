import type { Recipe } from '..';
import { Cable } from './cable';
import { CircuitBoard } from './circuitBoard';
import { CrystalOscillator } from './crystalOscillator';
import { Plastic, Rubber } from './importOnlyItems';
import { Quickwire } from './quickwire';

export const Computer = 'Computer';

export const ComputerRecipes: Recipe[] = [
  {
    name: 'Computer',
    default: true,
    produces: [{ item: Computer, rate: 2.5 }],
    consumes: [
      { item: CircuitBoard, rate: 10 },
      { item: Cable, rate: 20 },
      { item: Plastic, rate: 40 },
    ],
  },
  {
    name: 'Caterium Computer',
    produces: [{ item: Computer, rate: 3.75 }],
    consumes: [
      { item: CircuitBoard, rate: 15 },
      { item: Quickwire, rate: 52.5 },
      { item: Rubber, rate: 22.5 },
    ],
  },
  {
    name: 'Crystal Computer',
    produces: [{ item: Computer, rate: 3.333333 }],
    consumes: [
      { item: CircuitBoard, rate: 5 },
      { item: CrystalOscillator, rate: 1.666666 },
    ],
  },
];
