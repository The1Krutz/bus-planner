import { Item, type Recipe } from './types';

export const ReinforcedIronPlate: Recipe = {
  produces: [
    {
      item: Item.ReinforcedIronPlate,
      rate: 5,
    },
  ],
  consumes: [
    {
      item: Item.IronPlate,
      rate: 30,
    },
    {
      item: Item.Screws,
      rate: 60,
    },
  ],
};
