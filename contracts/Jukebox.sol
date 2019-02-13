pragma solidity ^0.5.0;

contract Jukebox {
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
  Song[3] songsAvailable;

  // Songs currently queued
  QueuedSong[5] queue;
  uint queueSize = 0;

  // --- Events --- //

  event SongSkip(uint skippedSongId);
  event SongPrepend(uint songId);
  event SongAppend(uint songId);

  // --- Constructor -------------------------------------------------------- //

  constructor() public {
    songsAvailable[0] = Song(0, 120);
    songsAvailable[1] = Song(1, 120);
    songsAvailable[2] = Song(2, 120);
  }

  // --- Business logic ----------------------------------------------------- //

  // --- Getters --- //

  /** Get the current size of the song queue. */
  function getQueueSize() public view returns (uint) {
    return queueSize;
  }

  /** Return data about a song currently in the queue. */
  function getSongDataByQueueIndex(uint queueIndex)
    public
    view
    returns
  (uint songId, uint durationSecs, uint timestampSecs, bool isSongCompleted) {
    require(queueIndex < queueSize - 1, "Song queue is smaller than the provided index.");
    QueuedSong memory qsong = queue[queueIndex];

    // Extract data from state
    songId = qsong.song.id;
    durationSecs = qsong.song.durationSecs;
    timestampSecs = qsong.timestampSecs;
    isSongCompleted = block.timestamp >= timestampSecs + durationSecs;

    return (songId, durationSecs, timestampSecs, isSongCompleted);
  }

  /** Return data about a song from its unique ID. */
  function getSongDataBySongId(uint songId)
    public
    view
    returns
  (uint id, uint durationSecs) {
    for (uint i = 0; i < songsAvailable.length; i++) {
      Song memory song = songsAvailable[i];
      if (song.id == songId) {
        id = song.id;
        durationSecs = song.durationSecs;
        return (id, durationSecs);
      }
    }

    require(false, "Song data not found.");
  }

  /**
   * Get the queue index of the currently playing song.
   */
  function getCurrentSongQueueIndex() public view returns (uint songQueueIndex) {
    for (uint i = 0; i < queueSize; i++) {
      QueuedSong memory qsong = queue[i];
      if (block.timestamp >= qsong.timestampSecs + qsong.song.durationSecs) {
        return i;
      }
    }

    require(false, "No song is currently playing.");
  }

  // --- State updates --- //

  /** Prepend a song to the jukebox playlist. */
  function prependSongToQueue(uint songId) public payable {}

  /** Append a song to the jukebox playlist. */
  function appendSongToQueue(uint songId) public payable {}

  /** Skip the currently playing song. */
  function skipSong() public {}

  /** Remove currently playing song from the queue. */
  function reconcileSongQueue() private {}
}
