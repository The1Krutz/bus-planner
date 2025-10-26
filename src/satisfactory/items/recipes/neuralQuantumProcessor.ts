import type { Recipe } from '..';
import { Cable } from './cable';

export const NeuralQuantumProcessor = 'Neural Quantum Processor';

export const NeuralQuantumProcessorRecipes: Recipe[] = [
  {
    name: 'Neural Quantum Processor',
    default: true,
    produces: [
      {
        item: NeuralQuantumProcessor,
        rate: 0,
      },
    ],
    consumes: [
      {
        item: Cable,
        rate: 0,
      },
    ],
  },
];
