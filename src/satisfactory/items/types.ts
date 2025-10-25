import type { IronPlate } from './recipes/ironPlate';
import type { IronRod } from './recipes/ironRod';
import type {
  IronIngot,
  IronOre,
  Plastic,
  SteelIngot,
} from './recipes/nonBusItems';
import type { ReinforcedIronPlate } from './recipes/reinforcedIronPlate';
import type { Screws } from './recipes/screws';

/**
 * This includes evey string for all items. Including the non-production ones
 */
export type Item =
  | typeof IronIngot
  | typeof IronOre
  | typeof IronPlate
  | typeof IronRod
  | typeof Plastic
  | typeof ReinforcedIronPlate
  | typeof Screws
  | typeof SteelIngot;

type ItemQuantity = {
  item: Item;
  rate: number;
};

export type Recipe = {
  name: string;
  default?: boolean;
  produces: ItemQuantity[];
  consumes: ItemQuantity[];
};
