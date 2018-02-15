import RestClientFactory from '../util/RestClientFactory';
import _ from 'lodash/fp';

import { addUsersVerbs } from './users';

const MyAppRestClient = () => {
  const factory = _.compose([
    addUsersVerbs,
    RestClientFactory,
  ]);

  const client = factory().getClient();
  return client;
}

export default MyAppRestClient;
