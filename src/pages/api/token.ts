import { token } from '../../services/token';

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

export default async function getToken() {
  const config = {
    headers: {
      Authorization:
        'Basic ' +
        Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
    },
  };

  const { data } = await token.post(
    'token',
    'grant_type=client_credentials',
    config
  );
  const { access_token } = data;

  return access_token;
}
