import { describe, expect, it } from 'vitest';
import { doesRecipeProduce } from './helpers';
import { type Recipe } from './types';
import { IronIngot } from './recipes/ironIngot';
import { IronPlate } from './recipes/ironPlate';
import { Screws } from './recipes/screws';

describe('Item Helpers', () => {
  describe('doesRecipeProduce', () => {
    const recipe: Recipe = {
      name: 'Test recipe',
      produces: [
        {
          item: IronPlate,
          rate: 20,
        },
      ],
      consumes: [
        {
          item: IronIngot,
          rate: 30,
        },
      ],
    };

    it('works when the recipe does produce an item', () => {
      const result = doesRecipeProduce(recipe, IronPlate);

      expect(result).toBeTruthy();
    });
    it('works when the recipe does not produce an item', () => {
      const result = doesRecipeProduce(recipe, Screws);

      expect(result).toBeFalsy();
    });
  });
});
