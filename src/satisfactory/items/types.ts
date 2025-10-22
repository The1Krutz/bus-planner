export const enum Item {
  IronIngot,
  IronPlate,
  IronRod,
  ReinforcedIronPlate,
  Screws,
}

type ItemQuantity = {
  item: Item;
  rate: number;
};

export type Recipe = {
  produces: ItemQuantity[];
  consumes: ItemQuantity[];
};
