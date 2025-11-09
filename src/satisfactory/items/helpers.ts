import { type Recipe, type Item, AllRecipes } from '.';

export function doesRecipeProduce(recipe: Recipe, item: Item): boolean {
  return recipe.produces.map((z) => z.item).some((z) => z === item);
}

export function getRecipesForItem(item: Item): Recipe[] {
  return AllRecipes.filter((recipe) => doesRecipeProduce(recipe, item));
}

export function GetImportRecipe(item: Item): Recipe {
  return {
    consumes: [],
    name: `Import - ${item}`,
    produces: [
      {
        item,
        rate: 1,
      },
    ],
  };
}

export function getDefaultRecipe(item: Item): Recipe {
  const defaultRecipe = getRecipesForItem(item).find(
    (recipe) => recipe.default,
  )!;

  if (defaultRecipe !== undefined) {
    return defaultRecipe;
  } else {
    return GetImportRecipe(item);
  }
}
