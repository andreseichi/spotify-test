import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { api } from '../services/api';

export default function Home({}: NextPage) {
  const [token, setToken] = useState('');

  useEffect(() => {
    getToken();
  }, []);

  const getToken = () => {
    try {
      api.get('token').then((response) => {
        console.log(response);
        setToken(response.data.access_token);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>hello world</h1>

      {token && <h2>access_token: {token}</h2>}
    </div>
  );
}
