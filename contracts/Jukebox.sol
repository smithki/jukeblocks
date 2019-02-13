pragma solidity ^0.5.0;

contract Adoption {
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
  Song[3] public songsAvailable = [
    Song(0, 120),
    Song(1, 120),
    Song(2, 120)
  ];

  // Songs currently queued
  QueuedSong[5] public queue;
  uint queueSize = 0;
  uint[] public playHistoryIds;
  uint playHistorySize = 0;

  // --- Events --- //

  event SongSkip(uint skippedSongId);
  event SongPrepend(uint songId);
  event SongAppend(uint songId);

  // --- Business logic ----------------------------------------------------- //

  // --- Getters --- //

  /** Get the current size of the song queue. */
  function getQueueSize() public view returns (uint) {
    return queueSize;
  }

  /** Get the current size of playHistory. */
  function getPlayHistorySize() public view returns (uint) {
    return playHistorySize;
  }

  /** Return data about a song currently in the queue. */
  function getSongDataByQueueIndex(uint queueIndex)
    public
    view
    returns
  (uint songId, uint durationSecs, uint timestampSecs, bool isSongCompleted) {
    require(queueIndex < queueSize - 1, "Song queue is smaller than the provided index.");
    QueuedSong storage qsong = queue[queueIndex];

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
      Song storage song = songsAvailable[i];
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
      QueuedSong storage qsong = queue[i];
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
