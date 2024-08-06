import { Consignor as TConsignor } from "../api/consignor/Consignor";

export const CONSIGNOR_TITLE_FIELD = "businessname";

export const ConsignorTitle = (record: TConsignor): string => {
  return record.businessname?.toString() || String(record.id);
};
