pragma solidity ^0.5.0;

import "./Owned.sol";

contract Jukebox is Owned {
  // --- Contract properties ------------------------------------------------ //

  // --- Data structures --- //

  // Song type
  struct Song {
    uint id;
    uint durationSecs;
  }

  // Queued song type
  struct QueuedSong {
    Song song; // The song type
    uint timestampSecs; // Unix timestamp when it was queued.
  }

  // --- State --- //

  // Song state
  uint numSongs;
  Song[3] songsAvailable;

  // Songs currently queued
  QueuedSong[] queue;

  // --- Events --- //

  event SongSkip(uint skippedSongId);
  event SongPrepend(uint songId);
  event SongAppend(uint songId);

  // --- Constructor -------------------------------------------------------- //

  constructor() public {
    songsAvailable[0] = Song(0, 120);
    songsAvailable[1] = Song(1, 120);
    songsAvailable[2] = Song(2, 120);
    numSongs = 3;
  }

  // --- Business logic ----------------------------------------------------- //

  // --- Getters --- //

  /** Get the current size of the song queue. */
  function getQueueSize() public view returns (uint) {
    return queue.length;
  }

  /** Return data about a song currently in the queue. */
  function getSongDataByQueueIndex(uint queueIndex)
    public
    view
    returns
  (uint songId, uint durationSecs, uint timestampSecs) {
    require(queueIndex < queue.length - 1, "Song queue is smaller than the provided queue index.");
    QueuedSong memory qsong = queue[queueIndex];

    // Extract data from state
    songId = qsong.song.id;
    durationSecs = qsong.song.durationSecs;
    timestampSecs = qsong.timestampSecs;

    return (songId, durationSecs, timestampSecs);
  }

  /** Return data about a song from its unique ID. */
  function getSongDataBySongId(uint songId)
    public
    view
    returns
  (uint id, uint durationSecs) {
    for (uint i = 0; i < numSongs; i++) {
      Song memory song = songsAvailable[i];
      if (song.id == songId) {
        id = song.id;
        durationSecs = song.durationSecs;
        return (id, durationSecs);
      }
    }

    require(false, "Song data not found.");
  }

  /** Get the queue index of the currently playing song. */
  function getCurrentSongQueueIndex(uint timestampSecs) public view returns (uint songQueueIndex) {
    uint prevDurationSecs = 0;

    // Find the currently playing song by comparing the given timestamp with
    // queued song timestamps/durations.
    for (uint i = 0; i < queue.length; i++) {
      QueuedSong memory qsong = queue[i];
      if (timestampSecs < qsong.timestampSecs + qsong.song.durationSecs + prevDurationSecs) {
        return i;
      }
      prevDurationSecs += qsong.song.durationSecs;
    }

    require(false, "No song is currently playing.");
  }

  // --- State updates --- //

  /** Prepend a song to the jukebox playlist. */
  // function prependSongToQueue(uint songId, uint timestampSecs) public {
  //   reconcileSongQueue(timestampSecs);

  //   require(queueSize < 5, "Song queue is full. Wait for the current song to finish or pay to skip.");

  //   if (queueSize > 0) {
  //     for (uint i = queueSize - 1; i >= 0; i--) {
  //       queue[i] = queue[i - 1];
  //     }
  //   }

  //   Song memory song = songsAvailable[songId];
  //   QueuedSong memory qsong = QueuedSong(song, timestampSecs);
  //   queue[0] = qsong;

  //   queueSize++;
  // }

  /** Append a song to the jukebox playlist. */
  function appendSongToQueue(uint songId, uint timestampSecs) public payable {
    reconcileSongQueue(timestampSecs);

    require(queue.length < 5, "Song queue is full. Wait for the current song to finish or pay to skip.");

    // Get the song
    Song memory song;
    for (uint i = 0; i < numSongs; i++) {
      if (song.id == songId) {
        song = songsAvailable[i];
      }
    }

    // Queue the song
    queue.length++;
    queue[queue.length] = QueuedSong(song, timestampSecs);
  }

  /** Skip the currently playing song. */
  // function skipSong() public {}

  /** Remove currently playing song from the queue. */
  function reconcileSongQueue(uint timestampSecs) private {
    uint numSongsRemoved = 0;
    uint prevDurationSecs = 0;

    // Find queued songs that are expired (already played).
    for (uint i = 0; i < queue.length; i++) {
      QueuedSong memory qsong = queue[i];
      if (timestampSecs >= qsong.timestampSecs + qsong.song.durationSecs + prevDurationSecs) {
        numSongsRemoved++;
        queue[i] = queue[i + numSongsRemoved];
        delete queue[i + numSongsRemoved];
        queue.length--;
      }

      prevDurationSecs += qsong.song.durationSecs;
    }
  }
}
