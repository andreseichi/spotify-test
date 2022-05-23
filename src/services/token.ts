import axios from 'axios';

export const token = axios.create({
  baseURL: 'https://accounts.spotify.com/api/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
