import type { Item } from './items';
import {
  type IProductionOverviewRowProps,
  ProductionOverviewRow,
} from './productionOverviewRow';
import type { IProductionBlock } from './types';

interface IProductionOverviewProps {
  productionBlocks: IProductionBlock[];
}

export function ProductionOverview({
  productionBlocks,
}: IProductionOverviewProps) {
  const productionByItem: {
    [x in Item]: {
      produced: number;
      consumed: number;
    };
  } = {
    'Adaptive Control Unit': { produced: 0, consumed: 0 },
    'AI Expansion Server': { produced: 0, consumed: 0 },
    'AI Limiter': { produced: 0, consumed: 0 },
    'Alclad Aluminum Sheet': { produced: 0, consumed: 0 },
    'Alumina Solution': { produced: 0, consumed: 0 },
    'Aluminum Casing': { produced: 0, consumed: 0 },
    'Aluminum Ingot': { produced: 0, consumed: 0 },
    'Assembly Director System': { produced: 0, consumed: 0 },
    'Automated Wiring': { produced: 0, consumed: 0 },
    'Ballistic Warp Drive': { produced: 0, consumed: 0 },
    Battery: { produced: 0, consumed: 0 },
    BiochemicalSculptor: { produced: 0, consumed: 0 },
    Cable: { produced: 0, consumed: 0 },
    'Caterium Ingot': { produced: 0, consumed: 0 },
    'Circuit Board': { produced: 0, consumed: 0 },
    Coal: { produced: 0, consumed: 0 },
    Computer: { produced: 0, consumed: 0 },
    Concrete: { produced: 0, consumed: 0 },
    'Cooling System': { produced: 0, consumed: 0 },
    'Copper Ingot': { produced: 0, consumed: 0 },
    'Copper Powder': { produced: 0, consumed: 0 },
    'Copper Sheet': { produced: 0, consumed: 0 },
    'Crude Oil': { produced: 0, consumed: 0 },
    'Crystal Oscillator': { produced: 0, consumed: 0 },
    'Dark Matter Crystal': { produced: 0, consumed: 0 },
    'Dark Matter Residue': { produced: 0, consumed: 0 },
    Diamonds: { produced: 0, consumed: 0 },
    'Electromagnetic Control Rod': { produced: 0, consumed: 0 },
    'Encased Industrial Beam': { produced: 0, consumed: 0 },
    'Excited Photonic Matter': { produced: 0, consumed: 0 },
    'Ficsite Ingot': { produced: 0, consumed: 0 },
    'Ficsite Trigon': { produced: 0, consumed: 0 },
    Fuel: { produced: 0, consumed: 0 },
    'Fused Modular Frame': { produced: 0, consumed: 0 },
    'Heat Sink': { produced: 0, consumed: 0 },
    'Heavy Modular Frame': { produced: 0, consumed: 0 },
    'Heavy Oil Residue': { produced: 0, consumed: 0 },
    'High Speed Connector': { produced: 0, consumed: 0 },
    'Iron Ingot': { produced: 0, consumed: 0 },
    'Iron Ore': { produced: 0, consumed: 0 },
    'Iron Plate': { produced: 0, consumed: 0 },
    'Iron Rod': { produced: 0, consumed: 0 },
    Limestone: { produced: 0, consumed: 0 },
    'Magnetic Field Generator': { produced: 0, consumed: 0 },
    'Modular Engine': { produced: 0, consumed: 0 },
    'Modular Frame': { produced: 0, consumed: 0 },
    Motor: { produced: 0, consumed: 0 },
    'Neural Quantum Processor': { produced: 0, consumed: 0 },
    'Nitric Acid': { produced: 0, consumed: 0 },
    'Nitrogen Gas': { produced: 0, consumed: 0 },
    'Nuclear Pasta': { produced: 0, consumed: 0 },
    'Packaged Nitrogen Gas': { produced: 0, consumed: 0 },
    'Packaged Turbofuel': { produced: 0, consumed: 0 },
    'Petroleum Coke': { produced: 0, consumed: 0 },
    Plastic: { produced: 0, consumed: 0 },
    'Pressure Conversion Cube': { produced: 0, consumed: 0 },
    'Quartz Crystal': { produced: 0, consumed: 0 },
    Quickwire: { produced: 0, consumed: 0 },
    'Radio Control Unit': { produced: 0, consumed: 0 },
    'Reanimated Sam': { produced: 0, consumed: 0 },
    'Reinforced Iron Plate': { produced: 0, consumed: 0 },
    Rotor: { produced: 0, consumed: 0 },
    Rubber: { produced: 0, consumed: 0 },
    'SAM Fluctuator': { produced: 0, consumed: 0 },
    Screws: { produced: 0, consumed: 0 },
    Silica: { produced: 0, consumed: 0 },
    'Singularity Cell': { produced: 0, consumed: 0 },
    'Smart Plating': { produced: 0, consumed: 0 },
    Stator: { produced: 0, consumed: 0 },
    'Steel Beam': { produced: 0, consumed: 0 },
    'Steel Ingot': { produced: 0, consumed: 0 },
    'Steel Pipe': { produced: 0, consumed: 0 },
    Sulfur: { produced: 0, consumed: 0 },
    'Sulfuric Acid': { produced: 0, consumed: 0 },
    Supercomputer: { produced: 0, consumed: 0 },
    'Superposition Oscillator': { produced: 0, consumed: 0 },
    'Thermal Propulsion Rocket': { produced: 0, consumed: 0 },
    'Time Crystal': { produced: 0, consumed: 0 },
    'Turbo Motor': { produced: 0, consumed: 0 },
    'Versatile Framework': { produced: 0, consumed: 0 },
    Water: { produced: 0, consumed: 0 },
    Wire: { produced: 0, consumed: 0 },
  };

  productionBlocks.forEach((block) => {
    block.recipe.produces.forEach((itemQuantity) => {
      productionByItem[itemQuantity.item].produced +=
        itemQuantity.rate * (block.quantity + block.sloops);
    });

    block.recipe.consumes.forEach((itemQuantity) => {
      productionByItem[itemQuantity.item].consumed +=
        itemQuantity.rate * block.quantity;
    });
  });

  const overviewRows: IProductionOverviewRowProps[] = [];

  for (const i in productionByItem) {
    const prod = productionByItem[i as Item];
    if (prod.consumed !== 0 || prod.produced !== 0)
      overviewRows.push({
        item: i as Item,
        produced: prod.produced,
        consumed: prod.consumed,
      });
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gridTemplateRows: 'repeat(1fr)',
        columnGap: '32px',
      }}
    >
      {/* table headers */}
      <span>Item</span>
      <span>Production</span>
      <span>Consumption</span>
      <span>Net</span>

      {/* table data */}
      {overviewRows
        .sort((a, b) => a.item.localeCompare(b.item))
        .map((z) => (
          <ProductionOverviewRow
            item={z.item}
            produced={z.produced}
            consumed={z.consumed}
          />
        ))}
    </div>
  );
}
