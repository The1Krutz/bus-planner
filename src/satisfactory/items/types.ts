import type { IronPlate } from './recipes/ironPlate';
import type { IronRod } from './recipes/ironRod';
import type {
  AluminumIngot,
  Concrete,
  IronIngot,
  IronOre,
  Plastic,
  Rubber,
  SteelIngot,
} from './recipes/importOnlyItems';
import type { ReinforcedIronPlate } from './recipes/reinforcedIronPlate';
import type { Screws } from './recipes/screws';
import type { SteelBeam } from './recipes/steelBeam';
import type { Wire } from './recipes/wire';

/**
 * This includes evey string for all items. Including the non-production ones
 */
export type Item =
  | typeof AluminumIngot
  | typeof Concrete
  | typeof IronIngot
  | typeof IronOre
  | typeof IronPlate
  | typeof IronRod
  | typeof Plastic
  | typeof ReinforcedIronPlate
  | typeof Rubber
  | typeof Screws
  | typeof SteelBeam
  | typeof SteelIngot
  | typeof Wire;

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
