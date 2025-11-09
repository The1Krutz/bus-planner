import { useState, type ChangeEvent } from 'react';
import { AllBusItems, type Item, type Recipe } from './items';
import { Screws } from './items/recipes/screws';
import { RecipePicker } from './recipePicker';
import type { IProductionBlock } from './types';
import { getDefaultRecipe } from './items/helpers';

interface IProductionRowProps {
  block: IProductionBlock;
  onUpdate: (update: IProductionBlock) => void;
}

export function ProductionRow({ block, onUpdate }: IProductionRowProps) {
  const [selectedItem, setSelectedItem] = useState<Item>(
    block.recipe.produces[0].item ?? Screws,
  );
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe>(block.recipe);
  const [quantity, setQuantity] = useState<number>(block.quantity);

  function selectItem(event: ChangeEvent<HTMLSelectElement>) {
    const itemName = event.target.value as Item;
    setSelectedItem(itemName);
    setSelectedRecipe(getDefaultRecipe(itemName));

    reportUpdate();
  }

  function selectRecipe(recipe: Recipe) {
    setSelectedRecipe(recipe);

    reportUpdate();
  }

  function selectQuantity(event: ChangeEvent<HTMLInputElement>) {
    const quantity = parseInt(event.target.value);
    setQuantity(quantity);

    reportUpdate();
  }

  function removeProductionBlock() {
    // TODO
  }

  function reportUpdate() {
    onUpdate({
      recipe: selectedRecipe,
      quantity,
      id: block.id,
    });
  }

  console.log('productionRow', selectedItem, selectedRecipe.name, quantity);

  return (
    <div
      style={{
        border: '1px solid lightgrey',
        borderRadius: '16px',
        padding: '16px',
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
        <RecipePicker
          blockId={block.id}
          item={selectedItem}
          recipe={selectedRecipe}
          onUpdate={selectRecipe}
        />
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

      <div>
        <button onClick={removeProductionBlock}>delete</button>
      </div>
    </div>
  );
}
