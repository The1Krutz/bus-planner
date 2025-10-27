import type { Recipe } from '..';
import { Cable } from './cable';
import { HighSpeedConnector } from './highSpeedConnector';
import { Stator } from './stator';
import { Wire } from './wire';

export const AutomatedWiring = 'Automated Wiring';

export const AutomatedWiringRecipes: Recipe[] = [
  {
    name: 'Automated Wiring',
    default: true,
    produces: [
      {
        item: AutomatedWiring,
        rate: 2.5,
      },
    ],
    consumes: [
      {
        item: Stator,
        rate: 2.5,
      },
      {
        item: Cable,
        rate: 50,
      },
    ],
  },
  {
    name: 'Automated Speed Wiring',
    produces: [
      {
        item: AutomatedWiring,
        rate: 7.5,
      },
    ],
    consumes: [
      {
        item: Stator,
        rate: 3.75,
      },
      {
        item: Wire,
        rate: 75,
      },
      {
        item: HighSpeedConnector,
        rate: 1.875,
      },
    ],
  },
];
