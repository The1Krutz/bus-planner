import { Item, type Recipe } from './types';

export const IronPlate: Recipe = {
  produces: [
    {
      item: Item.IronPlate,
      rate: 20,
    },
  ],
  consumes: [
    {
      item: Item.IronIngot,
      rate: 30,
    },
  ],
};
