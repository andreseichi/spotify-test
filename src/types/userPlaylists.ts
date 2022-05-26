export interface userPlaylists {
  href: string;
  items: Playlist[];
  limit: number;
  next?: string;
  previous?: string;
  total: number;
}

interface Playlist {
  description: string;
  href: string;
  name: string;
  owner: {
    display_name: string;
    id: string;
  };
}
