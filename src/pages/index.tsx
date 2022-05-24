import type { NextPage } from 'next';
import { FormEvent, useState } from 'react';

import { api } from '../services/api';

export default function Home({}: NextPage) {
  const [artistName, setArtistName] = useState('');
  const [artisInfo, setArtistInfo] = useState({});

  async function getArtist() {
    try {
      const { data } = await api.get(`artist/${artistName}`);
      console.log(data);
      setArtistInfo(data);
    } catch (error) {}
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    getArtist();
  }

  return (
    <div>
      <h1>hello world</h1>

      <form action="">
        <input
          type="text"
          value={artistName}
          onChange={(event) => setArtistName(event.target.value)}
        />

        <button type="submit" onClick={handleSubmit}>
          Enviar
        </button>
      </form>
    </div>
  );
}
