import type { IronIngot } from './recipes/ironIngot';
import type { IronPlate } from './recipes/ironPlate';
import type { IronRod } from './recipes/ironRod';
import type { IronOre } from './recipes/nonProductionItems';
import type { ReinforcedIronPlate } from './recipes/reinforcedIronPlate';
import type { Screws } from './recipes/screws';

export type Item =
  | 'unknown'
  | typeof IronIngot
  | typeof IronOre
  | typeof IronPlate
  | typeof IronRod
  | typeof ReinforcedIronPlate
  | typeof Screws;

type ItemQuantity = {
  item: Item;
  rate: number;
};

export type Recipe = {
  name: string;
  produces: ItemQuantity[];
  consumes: ItemQuantity[];
};
