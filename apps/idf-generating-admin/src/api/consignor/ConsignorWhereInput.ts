import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ConsignorWhereInput = {
  businessaddr?: StringNullableFilter;
  businessname?: StringNullableFilter;
  businessnation?: StringNullableFilter;
  id?: StringFilter;
  registered?: BooleanNullableFilter;
};
