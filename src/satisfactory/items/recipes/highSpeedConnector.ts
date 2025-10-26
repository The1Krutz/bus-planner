import type { Recipe } from '..';
import { Cable } from './cable';

export const HighSpeedConnector = 'High Speed Connector';

export const HighSpeedConnectorRecipes: Recipe[] = [
  {
    name: 'High Speed Connector',
    default: true,
    produces: [
      {
        item: HighSpeedConnector,
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
