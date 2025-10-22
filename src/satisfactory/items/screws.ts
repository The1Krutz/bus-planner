import { Item, type Recipe } from './types';

export const Screws: Recipe = {
  produces: [
    {
      item: Item.Screws,
      rate: 40,
    },
  ],
  consumes: [
    {
      item: Item.IronRod,
      rate: 10,
    },
  ],
};

export const CastScrews: Recipe = {
  produces: [
    {
      item: Item.Screws,
      rate: 50,
    },
  ],
  consumes: [
    {
      item: Item.IronIngot,
      rate: 12.5,
    },
  ],
};
