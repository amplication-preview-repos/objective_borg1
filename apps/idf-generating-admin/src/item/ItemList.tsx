import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Items"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="b31_commercial_goods" source="b31CommercialGoods" />
        <TextField label="b33_comb_nomen_code" source="b33CombNomenCode" />
        <TextField label="b33_taric_nomen_code" source="b33TaricNomenCode" />
        <TextField label="b34_origin_country" source="b34OriginCountry" />
        <TextField label="b37_cat_type" source="b37CatType" />
        <TextField label="b37_previous_pro" source="b37PreviousPro" />
        <TextField label="b37_requested_pro" source="b37RequestedPro" />
        <TextField label="b37_subcat" source="b37Subcat" />
        <TextField label="b38_net_mass" source="b38NetMass" />
        <TextField label="b41_unit_num" source="b41UnitNum" />
        <TextField label="b42_item_price" source="b42ItemPrice" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="item_num" source="itemNum" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
