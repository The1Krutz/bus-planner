import { describe, expect, it } from 'vitest';
import { AllBusItems, AllRecipes } from '..';
import { doesRecipeProduce } from '../helpers';

describe('Recipe validation', () => {
  describe('Costs', () => {
    AllRecipes.forEach((recipe) => {
      it(`${recipe.name} produces >0 items`, () => {
        expect(recipe.produces.length).toBeGreaterThanOrEqual(1);
        expect(recipe.produces.every((z) => z.rate > 0)).toBeTruthy();
      });

      it(`${recipe.name} comsumes >0 items`, () => {
        expect(recipe.consumes.length).toBeGreaterThanOrEqual(1);
        expect(recipe.consumes.every((z) => z.rate > 0)).toBeTruthy();
      });
    });
  });

  describe('Names', () => {
    it('All recipe names are unique', () => {
      const allNames = AllRecipes.map((z) => z.name);
      const allUniqueNames = new Set(allNames);

      allUniqueNames.forEach((name) => {
        allNames.splice(allNames.indexOf(name), 1);
      });

      expect(allNames).toHaveLength(0);
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
