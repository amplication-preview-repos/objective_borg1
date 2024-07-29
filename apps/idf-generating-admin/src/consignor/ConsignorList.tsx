import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ConsignorList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Consignors"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="businessaddr" source="businessaddr" />
        <TextField label="businessname" source="businessname" />
        <TextField label="businessnation" source="businessnation" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="registered" source="registered" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
