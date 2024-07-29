import { CompDataSegmentItemWhereInput } from "./CompDataSegmentItemWhereInput";
import { CompDataSegmentItemOrderByInput } from "./CompDataSegmentItemOrderByInput";

export type CompDataSegmentItemFindManyArgs = {
  where?: CompDataSegmentItemWhereInput;
  orderBy?: Array<CompDataSegmentItemOrderByInput>;
  skip?: number;
  take?: number;
};
