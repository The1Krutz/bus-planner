import { type Recipe, type Item, AllRecipes } from '.';

export function doesRecipeProduce(recipe: Recipe, item: Item): boolean {
  return recipe.produces.map((z) => z.item).some((z) => z === item);
}

export function getRecipesForItem(item: Item): Recipe[] {
  return AllRecipes.filter((recipe) => doesRecipeProduce(recipe, item));
}

export function getDefaultRecipe(item: Item): Recipe {
  return getRecipesForItem(item).find((recipe) => recipe.default)!;
}
