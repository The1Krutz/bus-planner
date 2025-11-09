import type { Item } from './items';

export interface IProductionOverviewRowProps {
  item: Item;
  produced: number;
  consumed: number;
}

export function ProductionOverviewRow({
  item,
  produced,
  consumed,
}: IProductionOverviewRowProps) {
  const net = produced - consumed;
  const deficientStyles: React.CSSProperties = {
    color: net < 0 ? 'red' : '',
  };

  return (
    <>
      <span style={deficientStyles}>{item}</span>
      <span style={deficientStyles}>{produced}</span>
      <span style={deficientStyles}>-{consumed}</span>
      <span style={deficientStyles}>{net}</span>
    </>
  );
}
