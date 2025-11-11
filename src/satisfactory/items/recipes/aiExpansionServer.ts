import type { Recipe } from '..';
import { DarkMatterResidue, ExcitedPhotonicMatter } from './importOnlyItems';
import { MagneticFieldGenerator } from './magneticFieldGenerator';
import { NeuralQuantumProcessor } from './neuralQuantumProcessor';
import { SuperpositionOscillator } from './superpositionOscillator';

export const AiExpansionServer = 'AI Expansion Server';

export const AiExpansionServerRecipes: Recipe[] = [
  {
    name: 'AI Expansion Server',
    default: true,
    produces: [
      { item: AiExpansionServer, rate: 4 },
      { item: DarkMatterResidue, rate: 100 },
    ],
    consumes: [
      { item: MagneticFieldGenerator, rate: 4 },
      { item: NeuralQuantumProcessor, rate: 4 },
      { item: SuperpositionOscillator, rate: 4 },
      { item: ExcitedPhotonicMatter, rate: 100 },
    ],
  },
];
