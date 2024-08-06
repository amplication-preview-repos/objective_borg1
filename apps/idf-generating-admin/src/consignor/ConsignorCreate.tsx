import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const ConsignorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="businessaddr" multiline source="businessaddr" />
        <TextInput label="businessname" source="businessname" />
        <TextInput label="businessnation" source="businessnation" />
        <BooleanInput label="registered" source="registered" />
      </SimpleForm>
    </Create>
  );
};
