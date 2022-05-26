import { NextApiRequest, NextApiResponse } from 'next';

import getToken from '../token';

import { spotify } from '../../../services/spotify';

export default async function user(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  const userId = slug[0];
  console.log(slug);

  const token = await getToken();

  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  if (slug.includes('playlists')) {
    const { data } = await spotify.get(`users/${userId}/playlists`, config);
    return res.status(200).json(data);
  }

  const { data } = await spotify.get(`users/${userId}`, config);
  return res.status(200).json(data);
}
