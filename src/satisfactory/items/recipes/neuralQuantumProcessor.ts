import type { Recipe } from '..';
import { DarkMatterResidue } from './darkMatterResidue';
import { FicsiteTrigon } from './ficsiteTrigon';
import { ExcitedPhotonicMatter } from './importOnlyItems';
import { Supercomputer } from './supercomputer';
import { TimeCrystal } from './timeCrystal';

export const NeuralQuantumProcessor = 'Neural Quantum Processor';

export const NeuralQuantumProcessorRecipes: Recipe[] = [
  {
    name: 'Neural Quantum Processor',
    default: true,
    produces: [
      { item: NeuralQuantumProcessor, rate: 3 },
      { item: DarkMatterResidue, rate: 75 },
    ],
    consumes: [
      { item: TimeCrystal, rate: 15 },
      { item: Supercomputer, rate: 3 },
      { item: FicsiteTrigon, rate: 45 },
      { item: ExcitedPhotonicMatter, rate: 75 },
    ],
  },
];
