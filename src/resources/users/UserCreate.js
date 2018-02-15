import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
} from 'admin-on-rest';

const UserCreate = (props) => (
  <Create {...props} title="Novo usuário">
    <SimpleForm>
      <TextInput label="Nome" source="fullName" />
      <TextInput label="Login" source="username" />
      <TextInput label="Email" source="email" type="email" />
    </SimpleForm>
  </Create>
);

export default UserCreate;
