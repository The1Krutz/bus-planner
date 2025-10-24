import type { Item, Recipe } from './types';

export function doesRecipeProduce(recipe: Recipe, item: Item): boolean {
  return recipe.produces.map((z) => z.item).some((z) => z === item);
}
