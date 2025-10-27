import { useEffect, useState } from 'react';
import { type Item, type Recipe } from './items';
import { getDefaultRecipe, getRecipesForItem } from './items/helpers';

interface IRecipePickerProps {
  blockId: string;
  item: Item;
  onUpdate: (recipe: Recipe) => void;
}

export function RecipePicker({ blockId, item, onUpdate }: IRecipePickerProps) {
  const filteredRecipes = getRecipesForItem(item);

  const [selectedRecipe, setSelectedRecipe] = useState<Recipe>(
    getDefaultRecipe(item),
  );

  function selectRecipe(recipe: Recipe) {
    setSelectedRecipe(recipe);

    // pass update to higher
    onUpdate(selectedRecipe);
  }

  function isRecipeSelected(recipe: Recipe): boolean {
    return recipe.name === selectedRecipe.name;
  }

  useEffect(() => {
    setSelectedRecipe(getDefaultRecipe(item));
  }, [item]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {filteredRecipes.map((recipe) => (
        <div key={recipe.name}>
          <div>
            <input
              key={recipe.name}
              id={`${blockId}-${recipe.name}`}
              type="radio"
              checked={isRecipeSelected(recipe)}
              onChange={() => selectRecipe(recipe)}
            />
            <label htmlFor={`${blockId}-${recipe.name}`}>{recipe.name}</label>
          </div>

          <div style={{ padding: '0 0 0 24px' }}>
            {recipe.produces.map((z) => (
              <>
                <span key={z.item}>
                  +{z.rate} {z.item}
                </span>
                <br />
              </>
            ))}
            <hr />
            {recipe.consumes.map((z) => (
              <>
                <span>
                  {z.rate * -1} {z.item}
                </span>
                <br />
              </>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
