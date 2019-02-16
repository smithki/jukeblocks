pragma solidity ^0.5.0;

import "./Owned.sol";

contract Jukebox is Owned {
  // --- Contract properties ------------------------------------------------ //

  // --- Pricing --- //

  uint appendSongPrice = 20000000000000000; // wei
  uint clearSongQueuePrice = 40000000000000000; // wei

  // --- Data structures --- //

  // Song type
  struct Song {
    bool initialized;
    uint id;
    uint durationSecs;
  }

  // Queued song type
  struct QueuedSong {
    bool initialized;
    Song song; // The song type
    uint timestampSecs; // Unix timestamp when it was queued.
  }

  // --- State --- //

  // Song state
  Song[3] songsAvailable;

  // Songs currently queued
  QueuedSong[] nextQueue;
  QueuedSong[] queue;

  // --- Events --- //

  event Update();

  // --- Constructor -------------------------------------------------------- //

  constructor() public {
    songsAvailable[0] = Song(true, 0, 10);
    songsAvailable[1] = Song(true, 1, 240);
    songsAvailable[2] = Song(true, 2, 680);
  }

  // --- Business logic ----------------------------------------------------- //

  // --- Read state --- //

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
    require(queueIndex < queue.length, "Song queue is smaller than the provided queue index.");
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

  /** Get the queue index of the currently playing song. */
  function getCurrentSongQueueIndex(uint timestampSecs) public view returns (uint) {
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

  // --- Mutate state --- //

  /** Prepend a song to the jukebox playlist. */
  // function prependSongToQueue(uint songId, uint timestampSecs) public {}

  /** Append a song to the jukebox playlist. */
  function appendSongToQueue(uint songId, uint timestampSecs) public payable {
    // require(msg.value >= appendSongPrice, "Adding a song to the queue costs at least 0.02 ETH.");

    reconcileSongQueue(timestampSecs);

    require(queue.length < 5, "Song queue is full. Wait for the current song to finish or pay to skip.");

    // Get the song
    Song memory song;
    for (uint i = 0; i < songsAvailable.length; i++) {
      Song memory checkSong = songsAvailable[i];
      if (checkSong.id == songId) {
        song = checkSong;
      }
    }

    // Queue the song
    queue.push(QueuedSong(true, song, timestampSecs));

    // Emit append event
    emit Update();
  }

  /** Clear all songs from the queue. */
  function clearSongQueue() public payable {
    // require(msg.value >= clearSongQueuePrice, "Clearing all songs in the queue costs at least 0.04 ETH.");

    require (queue.length > 0, "Song queue is empty.");

    delete queue;

    emit Update();
  }

  /** Remove previously played songs from the queue. */
  function reconcileSongQueue(uint timestampSecs) private {
    uint prevDurationSecs = 0;

    // Find queued songs that are expired (already played).
    for (uint i = 0; i < queue.length; i++) {
      QueuedSong memory qsong = queue[i];

      if (timestampSecs < qsong.timestampSecs + qsong.song.durationSecs + prevDurationSecs) {
        nextQueue.push(qsong);
      }

      prevDurationSecs += qsong.song.durationSecs;
    }

    delete queue;

    for (uint i = 0; i < nextQueue.length; i++) {
      queue.push(nextQueue[i]);
    }

    delete nextQueue;
  }
}
