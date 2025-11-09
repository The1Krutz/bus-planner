import { useState, type ChangeEvent } from 'react';
import { AllBusItems, type Item, type Recipe } from './items';
import { Screws } from './items/recipes/screws';
import { RecipePicker } from './recipePicker';
import type { IProductionBlock } from './types';
import { getDefaultRecipe } from './items/helpers';

interface IProductionRowProps {
  block: IProductionBlock;
  onUpdate: (update: IProductionBlock) => void;
  onDelete: (id: string) => void;
}

export function ProductionRow({
  block,
  onUpdate,
  onDelete,
}: IProductionRowProps) {
  const [selectedItem, setSelectedItem] = useState<Item>(
    block.recipe.produces[0].item ?? Screws,
  );
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe>(block.recipe);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(
    block.quantity,
  );

  function selectItem(event: ChangeEvent<HTMLSelectElement>) {
    const itemName = event.target.value as Item;
    setSelectedItem(itemName);
    selectRecipe(getDefaultRecipe(itemName));
  }

  function selectRecipe(recipe: Recipe) {
    setSelectedRecipe(recipe);

    reportUpdate({ recipe });
  }

  function selectQuantity(event: ChangeEvent<HTMLInputElement>) {
    const quantity = parseInt(event.target.value);
    setSelectedQuantity(quantity);

    reportUpdate({ quantity });
  }

  function removeProductionBlock() {
    onDelete(block.id);
  }

  function reportUpdate(update: Partial<IProductionBlock>) {
    const sending: IProductionBlock = {
      id: block.id,
      recipe: selectedRecipe,
      quantity: selectedQuantity,
      ...update,
    };

    onUpdate(sending);
  }

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
        <input
          type="number"
          value={selectedQuantity}
          onChange={selectQuantity}
        />
      </div>

      <div>
        <button onClick={removeProductionBlock}>delete</button>
      </div>
    </div>
  );
}
