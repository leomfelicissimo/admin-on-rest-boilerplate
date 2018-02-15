import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
} from 'admin-on-rest';

const UserList = (props) => (
  <List {...props} title="Usuários">
    <Datagrid>
      <TextField label="Nome" source="fullName" />
      <TextField label="Login" source="username" />
      <EmailField label="Email" source="email" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default UserList;
