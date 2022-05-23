import { NextApiRequest, NextApiResponse } from 'next';

import getToken from './token';

import { spotify } from '../../services/spotify';

export default async function artist(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = await getToken();

  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  const { data } = await spotify.get('artists', config);

  return res.status(200).json({ data });
}
