import { useState, type ChangeEvent } from 'react';
import { AllBusItems, AllRecipes } from './items';
import { doesRecipeProduce } from './items/helpers';
import type { Item, Recipe } from './items/types';
import { Screws, ScrewsRecipes } from './items/recipes/screws';

interface IAddProductionProps {
  onFinalize: (recipe: Recipe, quantity: number) => void;
}

export function AddProductionBlock({ onFinalize }: IAddProductionProps) {
  const [selectedItem, setSelectedItem] = useState<Item>(Screws);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe>(
    ScrewsRecipes[0],
  );
  const [quantity, setQuantity] = useState<number>(1);

  function selectItem(event: ChangeEvent<HTMLSelectElement>) {
    const itemName = event.target.value as Item;
    setSelectedItem(itemName);
    setDefaultRecipe(itemName);
  }

  function selectRecipe(event: ChangeEvent<HTMLSelectElement>) {
    const recipe = AllRecipes.find((z) => z.name === event.target.value);
    setSelectedRecipe(recipe!);
  }

  function selectQuantity(event: ChangeEvent<HTMLInputElement>) {
    const quantity = parseInt(event.target.value);
    setQuantity(quantity);
  }

  function setDefaultRecipe(item: Item) {
    const recipe = AllRecipes.filter((recipe) =>
      doesRecipeProduce(recipe, item),
    ).find((z) => z.default);
    setSelectedRecipe(recipe!);
  }

  function finalizeProductionBlock() {
    onFinalize(selectedRecipe, quantity);
  }

  // console.log(selectedItem, selectedRecipe);

  return (
    <div>
      <p>New production block</p>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: '12px',
          marginBottom: '16px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '200px',
          }}
        >
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
            width: '200px',
          }}
        >
          <span>Choose Recipe:</span>
          <select value={selectedRecipe.name} onChange={selectRecipe}>
            <option disabled>Select a recipe</option>
            {AllRecipes.filter((recipe) =>
              doesRecipeProduce(recipe, selectedItem),
            ).map((recipe) => (
              <option key={recipe.name} value={recipe.name}>
                {recipe.name}
              </option>
            ))}
          </select>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '200px',
          }}
        >
          <span>Number of machines producing this recipe</span>
          <input type="number" value={quantity} onChange={selectQuantity} />
        </div>
      </div>

      <button onClick={finalizeProductionBlock}>Add</button>
    </div>
  );
}
