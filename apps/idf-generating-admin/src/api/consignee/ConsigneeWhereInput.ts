import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ConsigneeWhereInput = {
  id?: StringFilter;
  registered?: BooleanNullableFilter;
  trnumber?: StringNullableFilter;
};
