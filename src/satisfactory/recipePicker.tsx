import { type Item, type Recipe } from './items';
import { getRecipesForItem } from './items/helpers';

interface IRecipePickerProps {
  blockId: string;
  item: Item;
  onUpdate: (recipe: Recipe) => void;
  recipe: Recipe;
}

export function RecipePicker({
  blockId,
  item,
  onUpdate,
  recipe,
}: IRecipePickerProps) {
  const filteredRecipes = getRecipesForItem(item);

  function selectRecipe(recipe: Recipe) {
    // pass update to higher
    onUpdate(recipe);
  }

  function isRecipeSelected(testRecipe: Recipe): boolean {
    return testRecipe.name === recipe.name;
  }

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
