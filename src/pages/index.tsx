import type { NextPage } from 'next';
import { FormEvent, useState } from 'react';
import dompurify from 'dompurify';

import { api } from '../services/api';

import { userPlaylists } from '../types/userPlaylists';

export default function Home({}: NextPage) {
  const [artistName, setArtistName] = useState('');
  const [artistInfo, setArtistInfo] = useState({});
  const [userPlaylists, setUserPlaylists] = useState<userPlaylists>(
    {} as userPlaylists
  );

  const sanitizer = dompurify.sanitize;

  async function getArtist() {
    try {
      const { data } = await api.get(`artist/${artistName}`);
      console.log(data);
      setArtistInfo(data);
    } catch (error) {}
  }

  async function getUser() {
    try {
      const { data } = await api.get(`users/${artistName}`);
      console.log(data);
      setArtistInfo(data);
    } catch (error) {}
  }

  async function getUserPlaylists() {
    try {
      const { data } = await api.get(`users/${artistName}/playlists`);
      console.log(data);
      setUserPlaylists(data);
    } catch (error) {}
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    // getArtist();
    // getUser();
    getUserPlaylists();
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

      {userPlaylists && (
        <>
          {userPlaylists.items?.map((item) => (
            <div key={item.description}>
              <p>{item.name}</p>
              <p
                dangerouslySetInnerHTML={{
                  __html: sanitizer(item.description),
                }}
              ></p>
              <p>{item.owner.display_name}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
