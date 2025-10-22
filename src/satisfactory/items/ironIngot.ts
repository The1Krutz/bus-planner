import { Item, type Recipe } from './types';

export const IronIngot: Recipe = {
  produces: [
    {
      item: Item.IronIngot,
      rate: 30,
    },
  ],
  consumes: [
    {
      item: Item.IronOre,
      rate: 30,
    },
  ],
};
