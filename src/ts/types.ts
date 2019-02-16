export interface SongData {
  id: number;
  durationSecs: number;
}

export interface QueuedSongData {
  song: SongData;
  timestampSecs: number;
}
