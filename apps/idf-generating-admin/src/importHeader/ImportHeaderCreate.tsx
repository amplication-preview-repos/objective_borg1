import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ImportHeaderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="action" source="action" />
        <TextInput label="b1_decla_sub1" source="b1DeclaSub1" />
        <TextInput label="b20_deliv_terms_sub1" source="b20DelivTermsSub1" />
        <TextInput label="b20_deliv_terms_sub2" source="b20DelivTermsSub2" />
        <TextInput label="b20_deliv_terms_sub3" source="b20DelivTermsSub3" />
        <TextInput label="b22_currency_code" source="b22CurrencyCode" />
        <NumberInput
          step={1}
          label="b22_total_amount"
          source="b22TotalAmount"
        />
        <NumberInput
          step={1}
          label="b25_border_trans"
          source="b25BorderTrans"
        />
        <NumberInput
          step={1}
          label="b26_inland_trans"
          source="b26InlandTrans"
        />
        <TextInput label="b27_place_of_loading" source="b27PlaceOfLoading" />
        <NumberInput
          step={1}
          label="b48_deferred_pay"
          source="b48DeferredPay"
        />
        <NumberInput step={1} label="b5_items" source="b5Items" />
        <NumberInput
          step={1}
          label="b9_total_freight"
          source="b9TotalFreight"
        />
        <NumberInput
          step={1}
          label="b9_total_insurance"
          source="b9TotalInsurance"
        />
        <TextInput label="box47_cd_pay_method" source="box47CdPayMethod" />
        <TextInput label="boxa_office_code" source="boxaOfficeCode" />
        <TextInput label="boxa_office_sub_code" source="boxaOfficeSubCode" />
        <TextInput label="cd_guarantee_method" source="cdGuaranteeMethod" />
        <TextInput label="direction" source="direction" />
        <TextInput label="information" multiline source="information" />
        <TextInput label="module" source="moduleField" />
        <TextInput label="user_id" source="userId" />
      </SimpleForm>
    </Create>
  );
};
