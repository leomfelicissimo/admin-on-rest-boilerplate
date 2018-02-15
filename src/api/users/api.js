import { doFetch, BASE_ADDRESS } from '../../util/apiRequest';

import _ from 'lodash';

const API_ADDRESS = `${BASE_ADDRESS}/users`;

const getAll = async params => {
  const userData = doFetch(API_ADDRESS);

  if (params.data && params.ids) {
    const ids = params.ids.map(id => ({ id }));
    const userIds = _.intersectionBy(ids, userData, 'id');
    return { data: userIds };
  }

  return userData;
};

const create = async ({ data }) => {
  console.log('create user: ', data);
  return doFetch(API_ADDRESS, { method: 'POST', body: JSON.stringify(data) });
}

export default {
  getAll,
  create,
}
