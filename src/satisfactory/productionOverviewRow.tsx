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
  return (
    <>
      <span>{item}</span>
      <span>+{produced}</span>
      <span>-{consumed}</span>
      <span>{produced - consumed}</span>
    </>
  );
}
