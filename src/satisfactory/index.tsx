import { useState } from 'react';
import { ProductionRow } from './productionRow';
import { ScrewsRecipes } from './items/recipes/screws';
import type { IProductionBlock } from './types';

function getUID() {
  // Get the timestamp and convert
  // it into alphanumeric input
  return Date.now().toString(36);
}

export function Satisfactory() {
  const [productionBlocks, setProductionBlocks] = useState<IProductionBlock[]>(
    [],
  );

  function addNewProductionRow() {
    const newBlock: IProductionBlock = {
      recipe: ScrewsRecipes[0],
      quantity: 1,
      id: getUID(),
    };

    setProductionBlocks([...productionBlocks, newBlock]);
  }

  function updateProductionRow() {
    console.log('satisfactory.index.updateProductionRow');
  }

  const allProductionBlocks = productionBlocks.map((block) => {
    return (
      <div key={block.id}>
        <ProductionRow
          blockId={block.id}
          initialRecipe={block.recipe}
          initialQuantity={block.quantity}
          onUpdate={updateProductionRow}
        />
      </div>
    );
  });

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
        {allProductionBlocks}
      </div>
    </div>
  );
}
