import type { Recipe } from '..';
import { FicsiteTrigon } from './ficsiteTrigon';
import { DarkMatterResidue, ExcitedPhotonicMatter } from './importOnlyItems';
import { Supercomputer } from './supercomputer';
import { TimeCrystal } from './timeCrystal';

export const NeuralQuantumProcessor = 'Neural Quantum Processor';

export const NeuralQuantumProcessorRecipes: Recipe[] = [
  {
    name: 'Neural Quantum Processor',
    default: true,
    produces: [
      { item: NeuralQuantumProcessor, rate: 3 },
      { item: DarkMatterResidue, rate: 3 },
    ],
    consumes: [
      { item: TimeCrystal, rate: 15 },
      { item: Supercomputer, rate: 3 },
      { item: FicsiteTrigon, rate: 45 },
      { item: ExcitedPhotonicMatter, rate: 75 },
    ],
  },
];
