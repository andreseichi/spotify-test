import { NextApiRequest, NextApiResponse } from 'next';

import { token } from '../../services/token';

export default async function getToken(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = await token.post('token', 'grant_type=client_credentials');

  return res.status(200).json(data);
}
