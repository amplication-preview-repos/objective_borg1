import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const ConsigneeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="registered" source="registered" />
        <TextInput label="trnumber" source="trnumber" />
      </SimpleForm>
    </Edit>
  );
};
