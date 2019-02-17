import { QueuedSongData, SongData, SongDetails } from '../types';

// Covers
import cover_0 from '../assets/images/album-covers/99-red-balloons_goldfinger.jpg';
import cover_1 from '../assets/images/album-covers/acid-jazz-singer_the-fratellis.jpg';
import cover_2 from '../assets/images/album-covers/all-the-small-things_blink-182.jpg';
import cover_3 from '../assets/images/album-covers/doors-unlocked-and-open_death-cab-for-cutie.jpg';

// MP3s
import mp3_0 from '../assets/mp3/99-red-balloons_goldfinger.mp3';
import mp3_1 from '../assets/mp3/acid-jazz-singer_the-fratellis.mp3';
import mp3_2 from '../assets/mp3/all-the-small-things_blink-182.mp3';
import mp3_3 from '../assets/mp3/doors-unlocked-and-open_death-cab-for-cutie.mp3';

export const songDetailsMappings: { [key: number]: SongDetails } = {
  0: {
    songName: '99 Red Balloons',
    artist: 'Goldfinger',
    cover: cover_0,
    mp3: mp3_0,
  },

  1: {
    songName: 'Acid Jazz Singer',
    artist: 'The Fratellis',
    cover: cover_1,
    mp3: mp3_1,
  },

  2: {
    songName: 'All the Small Things',
    artist: 'Blink-182',
    cover: cover_2,
    mp3: mp3_2,
  },

  3: {
    songName: 'Doors Unlocked and Open',
    artist: 'Death Cab for Cutie',
    cover: cover_3,
    mp3: mp3_3,
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
