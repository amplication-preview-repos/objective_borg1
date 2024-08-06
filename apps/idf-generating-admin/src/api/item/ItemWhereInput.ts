import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ItemWhereInput = {
  b31CommercialGoods?: StringNullableFilter;
  b33CombNomenCode?: StringNullableFilter;
  b33TaricNomenCode?: StringNullableFilter;
  b34OriginCountry?: StringNullableFilter;
  b37CatType?: StringNullableFilter;
  b37PreviousPro?: StringNullableFilter;
  b37RequestedPro?: StringNullableFilter;
  b37Subcat?: StringNullableFilter;
  b38NetMass?: IntNullableFilter;
  b41UnitNum?: IntNullableFilter;
  b42ItemPrice?: IntNullableFilter;
  id?: StringFilter;
  itemNum?: IntNullableFilter;
};
