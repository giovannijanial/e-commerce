import { Api } from '../providers';

const refreshToken = (oldToken: string) =>
  Api.post('auth/refresh', oldToken, {
    headers: { 'Content-type': 'Application/json' }
  });

export const RefreshService = {
  refreshToken
};
