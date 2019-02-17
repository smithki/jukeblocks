export interface SongData {
  id: number;
  durationSecs: number;
}

export interface QueuedSongData {
  song: SongData;
  timestampSecs: number;
}

export interface SongDetails {
  songName: string;
  artist: string;
  cover: string;
  mp3: string;
}
