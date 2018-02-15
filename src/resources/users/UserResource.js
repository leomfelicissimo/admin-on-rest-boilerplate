import React from 'react';
import { Resource } from 'admin-on-rest';
import { UserCreate, UserList, UserEdit } from './';

import PeopleIcon from 'material-ui/svg-icons/social/people';

const UserResource = () => (
  <Resource
    name="users"
    options={{ label: 'Usuários' }}
    icon={PeopleIcon}
    list={UserList}
    create={UserCreate}
    edit={UserEdit}
  />
);

export default UserResource;
