import { QueuedSongData, SongData, SongDetails } from '../types';

const songDetailsMappings: { [key: number]: SongDetails } = {
  0: {
    artist: 'test1',
  },

  1: {
    artist: 'test2',
  },

  2: {
    artist: 'test3',
  },
};

export function getSongDetails(songData: QueuedSongData): SongDetails;
export function getSongDetails(songData: SongData): SongDetails;
export function getSongDetails(songData: SongData | QueuedSongData) {
  const id = (songData as QueuedSongData).song
    ? (songData as QueuedSongData).song.id
    : (songData as SongData).id;
  return songDetailsMappings[id];
}
