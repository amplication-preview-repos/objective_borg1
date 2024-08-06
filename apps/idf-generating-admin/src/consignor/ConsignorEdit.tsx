import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const ConsignorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="businessaddr" multiline source="businessaddr" />
        <TextInput label="businessname" source="businessname" />
        <TextInput label="businessnation" source="businessnation" />
        <BooleanInput label="registered" source="registered" />
      </SimpleForm>
    </Edit>
  );
};
