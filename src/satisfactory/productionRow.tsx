import { useState, type ChangeEvent } from 'react';
import { AllBusItems, AllRecipes, type Item, type Recipe } from './items';
import { doesRecipeProduce } from './items/helpers';
import { Screws } from './items/recipes/screws';

interface IProductionRowProps {
  initialRecipe: Recipe;
  initialQuantity: number;
  onUpdate: (recipe: Recipe, quantity: number) => void;
}

export function ProductionRow({
  initialRecipe,
  initialQuantity,
  onUpdate,
}: IProductionRowProps) {
  const [selectedItem, setSelectedItem] = useState<Item>(
    initialRecipe.produces[0].item ?? Screws,
  );
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe>(initialRecipe);
  const [quantity, setQuantity] = useState<number>(initialQuantity);

  function selectItem(event: ChangeEvent<HTMLSelectElement>) {
    const itemName = event.target.value as Item;
    setSelectedItem(itemName);
    setDefaultRecipe(itemName);
  }

  function selectRecipe2(recipe: Recipe) {
    setSelectedRecipe(recipe);

    // pass update to higher
    onUpdate(selectedRecipe, quantity);
  }

  function selectQuantity(event: ChangeEvent<HTMLInputElement>) {
    const quantity = parseInt(event.target.value);
    setQuantity(quantity);

    // pass update to higher
    onUpdate(selectedRecipe, quantity);
  }

  function setDefaultRecipe(item: Item) {
    const recipe = AllRecipes.filter((recipe) =>
      doesRecipeProduce(recipe, item),
    ).find((z) => z.default);
    setSelectedRecipe(recipe!);
  }

  function isRecipeSelected(recipe: Recipe): boolean {
    return recipe.name === selectedRecipe.name;
  }

  return (
    <div
      style={{
        border: '1px solid lightgrey',
        borderRadius: '16px',
        padding: '16px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '12px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Choosing a product here is just a filter for the recipes in the next step. The recipe also contains this as a `produces` */}
          <span>Choose product:</span>
          <select value={selectedItem} onChange={selectItem}>
            <option disabled key="default">
              Select a product
            </option>
            {AllBusItems.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            {AllRecipes.filter((recipe) =>
              doesRecipeProduce(recipe, selectedItem),
            ).map((recipe) => (
              <div>
                <div>
                  <input
                    key={recipe.name}
                    id={recipe.name}
                    type="radio"
                    checked={isRecipeSelected(recipe)}
                    onChange={() => selectRecipe2(recipe)}
                  />
                  <label htmlFor={recipe.name}>{recipe.name}</label>
                </div>

                <div style={{ paddingLeft: '32px' }}>
                  {recipe.produces.map((z) => (
                    <>
                      <span>
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
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100px',
          }}
        >
          <span>Quantity</span>
          <input type="number" value={quantity} onChange={selectQuantity} />
        </div>
      </div>
    </div>
  );
}
