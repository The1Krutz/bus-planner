import { type Recipe } from '../types';
import { Cable } from './cable';

export const AutomatedWiring = 'Automated Wiring';

export const AutomatedWiringRecipes: Recipe[] = [
  {
    name: 'Automated Wiring',
    default: true,
    produces: [
      {
        item: AutomatedWiring,
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
