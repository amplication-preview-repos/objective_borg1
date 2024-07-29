import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ImportHeaderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="action" source="action" />
        <TextField label="b1_decla_sub1" source="b1DeclaSub1" />
        <TextField label="b20_deliv_terms_sub1" source="b20DelivTermsSub1" />
        <TextField label="b20_deliv_terms_sub2" source="b20DelivTermsSub2" />
        <TextField label="b20_deliv_terms_sub3" source="b20DelivTermsSub3" />
        <TextField label="b22_currency_code" source="b22CurrencyCode" />
        <TextField label="b22_total_amount" source="b22TotalAmount" />
        <TextField label="b25_border_trans" source="b25BorderTrans" />
        <TextField label="b26_inland_trans" source="b26InlandTrans" />
        <TextField label="b27_place_of_loading" source="b27PlaceOfLoading" />
        <TextField label="b48_deferred_pay" source="b48DeferredPay" />
        <TextField label="b5_items" source="b5Items" />
        <TextField label="b9_total_freight" source="b9TotalFreight" />
        <TextField label="b9_total_insurance" source="b9TotalInsurance" />
        <TextField label="box47_cd_pay_method" source="box47CdPayMethod" />
        <TextField label="boxa_office_code" source="boxaOfficeCode" />
        <TextField label="boxa_office_sub_code" source="boxaOfficeSubCode" />
        <TextField label="cd_guarantee_method" source="cdGuaranteeMethod" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="direction" source="direction" />
        <TextField label="ID" source="id" />
        <TextField label="information" source="information" />
        <TextField label="module" source="moduleField" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user_id" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
