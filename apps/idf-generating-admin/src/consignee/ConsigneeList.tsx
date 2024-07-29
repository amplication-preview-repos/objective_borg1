import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ConsigneeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Consignees"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="registered" source="registered" />
        <TextField label="trnumber" source="trnumber" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};