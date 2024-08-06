import { Item as TItem } from "../api/item/Item";

export const ITEM_TITLE_FIELD = "b31CommercialGoods";

export const ItemTitle = (record: TItem): string => {
  return record.b31CommercialGoods?.toString() || String(record.id);
};
