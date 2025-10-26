import { describe, expect, it } from 'vitest';
import { AllBusItems, AllRecipes } from '..';
import { doesRecipeProduce } from '../helpers';

describe('Recipe validation', () => {
  describe('Costs', () => {
    AllRecipes.forEach((recipe) => {
      it(`${recipe.name} produces >0 items`, () => {
        expect(recipe.produces.every((z) => z.rate > 0)).toBeTruthy();
      });

      it(`${recipe.name} comsumes >0 items`, () => {
        expect(recipe.consumes.every((z) => z.rate > 0)).toBeTruthy();
      });
    });
  });

  describe('Defaults', () => {
    AllBusItems.forEach((item) => {
      it(`${item} has exactly 1 default recipe`, () => {
        expect(
          AllRecipes.filter((recipe) => doesRecipeProduce(recipe, item)).filter(
            (z) => z.default,
          ).length,
        ).toEqual(1);
      });
    });
  });
});
