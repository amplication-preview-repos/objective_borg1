import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CompDataSegmentItemWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  value?: StringNullableFilter;
};
