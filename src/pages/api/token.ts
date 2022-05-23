import { token } from '../../services/token';

export default async function getToken() {
  const { data } = await token.post('token', 'grant_type=client_credentials');
  const { access_token } = data;

  return access_token;
}
