import React from 'react';
import { Admin } from 'admin-on-rest';
import MyAppRestClient from './api/MyAppRestClient';
import authClient from './api/authClient';

import { AdminResources } from './resources';

const MyAppAdmin = () => (
  <Admin authClient={authClient} restClient={MyAppRestClient()} title="Admin">
    {AdminResources}
  </Admin>
)

export default MyAppAdmin;
