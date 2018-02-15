import usersApi from './api';

export const addUsersVerbs = (clientFactory) => {
  clientFactory.addResourceVerb('users', 'GET_LIST', usersApi.getAll)
  clientFactory.addResourceVerb('users', 'GET_MANY', usersApi.getAll)
  clientFactory.addResourceVerb('users', 'GET_ONE', usersApi.getOne)
  clientFactory.addResourceVerb('users', 'CREATE', usersApi.create)
  clientFactory.addResourceVerb('users', 'UPDATE', usersApi.update)
  clientFactory.addResourceVerb('users', 'DELETE', usersApi.delete)
  return clientFactory;
}
