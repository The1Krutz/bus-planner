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
    <div>
      <p>
        {item}: +{produced}, -{consumed}, net {produced - consumed}
      </p>
    </div>
  );
}
