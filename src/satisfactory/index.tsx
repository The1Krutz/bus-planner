import { useState } from 'react';
import { AllItems } from './items';

export function Satisfactory() {
  const [showAddProductionCell, setShowAddProductionCell] = useState(false);

  function addNewProductionBlock() {
    console.log('adding new production block');
    setShowAddProductionCell(true);
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
          <select>
            <option disabled key="default">
              Select a product
            </option>
            {AllItems.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
