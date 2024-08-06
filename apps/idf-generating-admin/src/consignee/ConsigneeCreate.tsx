import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const ConsigneeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="registered" source="registered" />
        <TextInput label="trnumber" source="trnumber" />
      </SimpleForm>
    </Create>
  );
};
