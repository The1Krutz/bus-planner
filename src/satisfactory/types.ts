import type { Recipe } from './items';

export interface IProductionBlock {
  recipe: Recipe;
  quantity: number;
  id: string;
  sloops: number;
}
