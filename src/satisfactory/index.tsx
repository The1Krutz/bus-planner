import { useState } from 'react';
import { AddProductionBlock } from './addProductionBlock';
import type { Recipe } from './items/types';

export function Satisfactory() {
  const [addingProductionCell, setAddingProductionCell] = useState(false);

  function addNewProductionBlock() {
    setAddingProductionCell(true);
  }

  function addNewProduction(recipe: Recipe, quantity: number) {
    console.log('Satisfactory.addNewProduction', recipe, quantity);
    // TODO - add this recipe/quantity to the overall faactory production

    setAddingProductionCell(false);
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

      {addingProductionCell && (
        <AddProductionBlock onFinalize={addNewProduction} />
      )}
    </div>
  );
}
