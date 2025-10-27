import type { Recipe } from '..';
import { Cable } from './cable';
import { CircuitBoard } from './circuitBoard';
import { Silica } from './importOnlyItems';
import { Quickwire } from './quickwire';

export const HighSpeedConnector = 'High Speed Connector';

export const HighSpeedConnectorRecipes: Recipe[] = [
  {
    name: 'High Speed Connector',
    default: true,
    produces: [{ item: HighSpeedConnector, rate: 3.75 }],
    consumes: [
      { item: Quickwire, rate: 210 },
      { item: Cable, rate: 37.5 },
      { item: CircuitBoard, rate: 3.75 },
    ],
  },
  {
    name: 'Silicon High Speed Connector',
    produces: [{ item: HighSpeedConnector, rate: 3 }],
    consumes: [
      { item: Quickwire, rate: 90 },
      { item: Silica, rate: 37.5 },
      { item: CircuitBoard, rate: 3 },
    ],
  },
];
