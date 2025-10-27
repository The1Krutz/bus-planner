import { useState } from 'react';
import { ProductionRow } from './productionRow';
import type { Recipe } from './items';

export function Satisfactory() {
  const [addingProductionCell, setAddingProductionCell] = useState(false);

  function addNewProductionRow() {
    setAddingProductionCell(true);
  }

  function addNewProduction(recipe: Recipe, quantity: number) {
    console.log('Satisfactory.addNewProduction', recipe, quantity);
    // TODO - add this recipe/quantity to the overall factory production

    setAddingProductionCell(false);
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'min-content 1fr',
        gridTemplateRows: 'min-content 1fr',
        gridTemplateAreas: `
      'alert alert'
      'overview production'
      `,
        padding: '24px',
        gap: '16px',
      }}
    >
      <div
        style={{
          gridArea: 'alert',
          textAlign: 'center',
        }}
      >
        <p>TODO - alert for underproducing items</p>
      </div>

      <div
        style={{
          gridArea: 'overview',
          textWrap: 'nowrap',
        }}
      >
        <h4>Production Overview</h4>
        <hr />
        <p>TODO - overview row component</p>
        <p>TODO - overview row component</p>
        <p>TODO - overview row component</p>
      </div>

      <div style={{ gridArea: 'production' }}>
        <h4>
          Production Blocks
          <button onClick={addNewProductionRow}> Add New </button>
        </h4>
        <hr />
        <p>TODO - production block component</p>
        <p>TODO - production block component</p>
        <p>TODO - production block component</p>
        <p>TODO - production block component</p>
        <p>TODO - production block component</p>
        {addingProductionCell && (
          <ProductionRow onUpdate={addNewProduction} />
        )}
      </div>
    </div>
  );
}
