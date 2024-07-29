import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="b31_commercial_goods" source="b31CommercialGoods" />
        <TextInput label="b33_comb_nomen_code" source="b33CombNomenCode" />
        <TextInput label="b33_taric_nomen_code" source="b33TaricNomenCode" />
        <TextInput label="b34_origin_country" source="b34OriginCountry" />
        <TextInput label="b37_cat_type" source="b37CatType" />
        <TextInput label="b37_previous_pro" source="b37PreviousPro" />
        <TextInput label="b37_requested_pro" source="b37RequestedPro" />
        <TextInput label="b37_subcat" source="b37Subcat" />
        <NumberInput step={1} label="b38_net_mass" source="b38NetMass" />
        <NumberInput step={1} label="b41_unit_num" source="b41UnitNum" />
        <NumberInput step={1} label="b42_item_price" source="b42ItemPrice" />
        <NumberInput step={1} label="item_num" source="itemNum" />
      </SimpleForm>
    </Edit>
  );
};
