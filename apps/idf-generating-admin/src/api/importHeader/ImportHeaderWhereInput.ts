import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ImportHeaderWhereInput = {
  action?: StringNullableFilter;
  b1DeclaSub1?: StringNullableFilter;
  b20DelivTermsSub1?: StringNullableFilter;
  b20DelivTermsSub2?: StringNullableFilter;
  b20DelivTermsSub3?: StringNullableFilter;
  b22CurrencyCode?: StringNullableFilter;
  b22TotalAmount?: IntNullableFilter;
  b25BorderTrans?: IntNullableFilter;
  b26InlandTrans?: IntNullableFilter;
  b27PlaceOfLoading?: StringNullableFilter;
  b48DeferredPay?: IntNullableFilter;
  b5Items?: IntNullableFilter;
  b9TotalFreight?: IntNullableFilter;
  b9TotalInsurance?: IntNullableFilter;
  box47CdPayMethod?: StringNullableFilter;
  boxaOfficeCode?: StringNullableFilter;
  boxaOfficeSubCode?: StringNullableFilter;
  cdGuaranteeMethod?: StringNullableFilter;
  direction?: StringNullableFilter;
  id?: StringFilter;
  information?: StringNullableFilter;
  moduleField?: StringNullableFilter;
  userId?: StringNullableFilter;
};
