import type { Recipe } from '..';
import { AlcladAluminumSheet } from './alcladAluminumSheet';
import { CrystalOscillator } from './crystalOscillator';
import { DarkMatterCrystal } from './darkMatterCrystal';
import { DarkMatterResidue, ExcitedPhotonicMatter } from './importOnlyItems';

export const SuperpositionOscillator = 'Superposition Oscillator';

export const SuperpositionOscillatorRecipes: Recipe[] = [
  {
    name: 'Superposition Oscillator',
    default: true,
    produces: [
      {
        item: SuperpositionOscillator,
        rate: 5,
      },
      {
        item: DarkMatterResidue,
        rate: 125,
      },
    ],
    consumes: [
      {
        item: DarkMatterCrystal,
        rate: 30,
      },
      {
        item: CrystalOscillator,
        rate: 5,
      },
      {
        item: AlcladAluminumSheet,
        rate: 45,
      },
      {
        item: ExcitedPhotonicMatter,
        rate: 125,
      },
    ],
  },
];
