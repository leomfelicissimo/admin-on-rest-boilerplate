import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
} from 'admin-on-rest';

const UserEdit = (props) => (
  <Edit {...props} title="Alterar dados de usuário">
    <SimpleForm>
      <TextInput label="Nome" source="fullName" />
      <TextInput label="Login" source="username" />
      <TextInput label="Email" source="email" type="email" />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
