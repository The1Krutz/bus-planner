import { Item, type Recipe } from './types';

export const IronRod: Recipe = {
  produces: [
    {
      item: Item.IronRod,
      rate: 15,
    },
  ],
  consumes: [
    {
      item: Item.IronIngot,
      rate: 15,
    },
  ],
};
