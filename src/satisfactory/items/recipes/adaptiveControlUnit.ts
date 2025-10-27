import type { Recipe } from '..';
import { AutomatedWiring } from './automatedWiring';
import { CircuitBoard } from './circuitBoard';
import { Computer } from './computer';
import { HeavyModularFrame } from './heavyModularFrame';

export const AdaptiveControlUnit = 'Adaptive Control Unit';

export const AdaptiveControlUnitRecipes: Recipe[] = [
  {
    name: 'Adaptive Control Unit',
    default: true,
    produces: [{ item: AdaptiveControlUnit, rate: 1 }],
    consumes: [
      { item: AutomatedWiring, rate: 5 },
      { item: CircuitBoard, rate: 5 },
      { item: HeavyModularFrame, rate: 1 },
      { item: Computer, rate: 2 },
    ],
  },
];
