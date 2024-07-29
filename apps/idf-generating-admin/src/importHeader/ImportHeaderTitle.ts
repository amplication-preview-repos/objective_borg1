import { ImportHeader as TImportHeader } from "../api/importHeader/ImportHeader";

export const IMPORTHEADER_TITLE_FIELD = "action";

export const ImportHeaderTitle = (record: TImportHeader): string => {
  return record.action?.toString() || String(record.id);
};
