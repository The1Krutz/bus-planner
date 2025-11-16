import { ProductionRow } from './productionRow';
import { ScrewsRecipes } from './items/recipes/screws';
import type { IProductionBlock } from './types';
import { ProductionOverview } from './productionOverview';
import usePersistentState from '../usePersistentState';

function getUID() {
  // Get the timestamp and convert
  // it into alphanumeric input
  return Date.now().toString(36);
}

export function Satisfactory() {
  const [productionBlocks, setProductionBlocks] = usePersistentState<
    IProductionBlock[]
  >('factory', []);

  function addNewProductionRow() {
    const newBlock: IProductionBlock = {
      recipe: ScrewsRecipes[0],
      quantity: 1,
      id: getUID(),
      sloops: 0,
    };

    setProductionBlocks([...productionBlocks, newBlock]);
  }

  function updateProductionRow(update: IProductionBlock) {
    const blocksCopy = productionBlocks.map((block) =>
      block.id === update.id ? update : block,
    );

    setProductionBlocks(blocksCopy);
  }

  function deleteProductionRow(id: string) {
    const blocksCopy = productionBlocks.filter((block) => block.id !== id);

    setProductionBlocks(blocksCopy);
  }

  const allProductionBlocks = productionBlocks.map((block) => {
    return (
      <div key={block.id}>
        <ProductionRow
          block={block}
          onUpdate={updateProductionRow}
          onDelete={deleteProductionRow}
        />
      </div>
    );
  });

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        gridTemplateAreas: `
      'overview production'
      `,
        padding: '24px',
        gap: '16px',
      }}
    >
      <div
        style={{
          gridArea: 'overview',
          textWrap: 'nowrap',
          maxHeight: '1400px',
          overflowY: 'scroll',
        }}
      >
        <h4>Production Overview</h4>
        <hr />
        <ProductionOverview productionBlocks={productionBlocks} />
      </div>

      <div
        style={{
          gridArea: 'production',
          maxHeight: '1400px',
          overflowY: 'scroll',
        }}
      >
        <h4>Production Blocks</h4>
        <hr />
        {allProductionBlocks}

        <button
          style={{
            margin: '12px 0 32px',
          }}
          onClick={addNewProductionRow}
        >
          Add New
        </button>
      </div>
    </div>
  );
}
