import { CompDataSegmentItem as TCompDataSegmentItem } from "../api/compDataSegmentItem/CompDataSegmentItem";

export const COMPDATASEGMENTITEM_TITLE_FIELD = "name";

export const CompDataSegmentItemTitle = (
  record: TCompDataSegmentItem
): string => {
  return record.name?.toString() || String(record.id);
};
