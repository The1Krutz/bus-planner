import { useState, type ChangeEvent } from 'react';
import { AllItems, AllRecipes } from './items';
import { doesRecipeProduce } from './items/helpers';
import type { Item } from './items/types';

export function Satisfactory() {
  const [showAddProductionCell, setShowAddProductionCell] = useState(false);
  const [producingItem, setProducingItem] = useState<Item>('unknown');

  function addNewProductionBlock() {
    console.log('adding new production block');
    setShowAddProductionCell(true);
  }

  function chooseProducingItem(event: ChangeEvent<HTMLSelectElement>) {
    setProducingItem(event.target.value as Item);
  }

  return (
    <div>
      <h2>Satisfactory</h2>
      <div className="debug">
        <div>
          Add new production block
          <button onClick={addNewProductionBlock}> + </button>
        </div>
      </div>

      {showAddProductionCell && (
        <div>
          New production block
          <br />
          Choose product:
          <select onChange={chooseProducingItem}>
            <option disabled key="default">
              Select a product
            </option>
            {AllItems.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <div>
            Choose Recipe:
            <select>
              <option disabled key="default">
                Select a recipe
              </option>
              {AllRecipes.filter((recipe) =>
                doesRecipeProduce(recipe, producingItem),
              ).map((recipe) => (
                <option key={recipe.name} value={recipe.name}>
                  {recipe.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
