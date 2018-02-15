import { AUTH_LOGIN, AUTH_ERROR, AUTH_LOGOUT } from 'admin-on-rest';
import { BASE_ADDRESS, doFetch } from '../util/apiRequest';

const API_ADDRESS = `${BASE_ADDRESS}/users/login`;

export default async (type, params) => {
  if (type === AUTH_LOGIN) {
    console.log('login');
    const { username, password } = params;
    const fetchResult = await doFetch(API_ADDRESS, {
      method: 'POST',
      body: btoa(JSON.stringify({ username, password })),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });

    localStorage.setItem('token', fetchResult.data.authToken);
    console.log('logado');
    return Promise.resolve();
  }

  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('token');
    return Promise.resolve();
  }

  if (type === AUTH_ERROR) {
    console.log('auth_error');
    const status  = params.message.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
    }

    return Promise.reject('Acesso negado.');
  }
}
