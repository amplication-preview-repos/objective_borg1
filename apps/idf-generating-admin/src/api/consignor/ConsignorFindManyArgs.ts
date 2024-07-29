import { ConsignorWhereInput } from "./ConsignorWhereInput";
import { ConsignorOrderByInput } from "./ConsignorOrderByInput";

export type ConsignorFindManyArgs = {
  where?: ConsignorWhereInput;
  orderBy?: Array<ConsignorOrderByInput>;
  skip?: number;
  take?: number;
};
