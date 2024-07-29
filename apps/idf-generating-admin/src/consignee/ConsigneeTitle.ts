import { Consignee as TConsignee } from "../api/consignee/Consignee";

export const CONSIGNEE_TITLE_FIELD = "trnumber";

export const ConsigneeTitle = (record: TConsignee): string => {
  return record.trnumber?.toString() || String(record.id);
};
