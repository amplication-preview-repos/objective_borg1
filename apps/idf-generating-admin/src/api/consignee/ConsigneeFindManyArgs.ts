import { ConsigneeWhereInput } from "./ConsigneeWhereInput";
import { ConsigneeOrderByInput } from "./ConsigneeOrderByInput";

export type ConsigneeFindManyArgs = {
  where?: ConsigneeWhereInput;
  orderBy?: Array<ConsigneeOrderByInput>;
  skip?: number;
  take?: number;
};
