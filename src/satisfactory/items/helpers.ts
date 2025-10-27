import type { Recipe, Item } from '.';

export function doesRecipeProduce(recipe: Recipe, item: Item): boolean {
  return recipe.produces.map((z) => z.item).some((z) => z === item);
}
