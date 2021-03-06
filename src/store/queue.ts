import {
  ModuleActions,
  ModuleGetters,
  ModuleMutations,
  state,
  vuexTsBuilder,
} from 'vuex-ts';
import Web3 from 'web3/types';
import * as JukeboxArtifact from '../../build/contracts/Jukebox.json';
import { CONTRACT_ADDRESS } from '../constants';
import { getSongDetails } from '../lib/song-details';
import { QueuedSongData } from '../types';
import { jukebox } from './jukebox';

// --- Model --- //

interface QueueState {
  songs: QueuedSongData[];
  track: HTMLAudioElement;
  start: boolean;
}

const initialQueueState: QueueState = {
  songs: [],
  track: undefined,
  start: false,
};

// --- Mutations --- //

class QueueMutations extends ModuleMutations<QueueState> {
  setSongs(newSongs: QueuedSongData[]) {
    this[state].songs = newSongs;
  }

  clearSongs() {
    this[state].songs = [];
  }

  addSong(newSong: QueuedSongData) {
    this[state].songs.push(newSong);
  }

  setTrack(track: HTMLAudioElement) {
    this[state].track = track;
  }

  setStart(start: boolean) {
    this[state].start = start;
  }
}

// --- Actions --- //

class QueueActions extends ModuleActions<QueueState> {
  async next(firstPlay?: boolean) {
    const now = Math.floor(new Date().getTime() / 1000);

    if (!firstPlay) queue.commit.setSongs(queue.state.songs.slice(1));

    const songDetails = getSongDetails(queue.getters.currentSong);

    const audio = new Audio(songDetails.mp3);
    queue.commit.setTrack(audio);
    queue.state.track.play();
    queue.state.track.currentTime =
      now - queue.getters.currentSong.timestampSecs;
    queue.state.track.addEventListener('ended', () => {
      queue.dispatch.next();
    });

    window.addEventListener('beforeunload', () => {
      if (queue.state.track) queue.state.track.pause();
      queue.commit.setTrack(undefined);
    });
  }

  async updateQueue() {
    queue.commit.clearSongs();

    const tempQueue = [];

    const size = await jukebox.state.contract.getQueueSize();

    for (let i = 0; i < size; i++) {
      const payload = await jukebox.state.contract.getSongDataByQueueIndex(i);
      tempQueue.push(payload);
    }

    try {
      const current = await jukebox.state.contract.getCurrentSongQueueIndex();
      tempQueue.splice(0, current);
      queue.commit.setSongs(tempQueue);
    } catch (err) {
      console.log(err);
      // if (err.message.includes('No song is currently playing.')) {
      // }
    }

    console.log(queue.state.songs);
  }

  async initialize(web3: Web3) {
    await this.updateQueue();
    const wsContract = new web3.eth.Contract(
      JukeboxArtifact.abi as any,
      CONTRACT_ADDRESS,
    );

    wsContract.events.Append({}, (err, receipt) => {
      if (err) {
        console.log('[WEB3 -- WS Append err]', err);
      }

      if (receipt) {
        const payload: QueuedSongData = {
          song: {
            id: receipt.returnValues.songId,
            durationSecs: receipt.returnValues.durationSecs,
          },
          timestampSecs: receipt.returnValues.timestampSecs,
        };

        console.log('[WEB3 -- WS Append txn]', payload);
        queue.commit.addSong(payload);
        if (queue.state.songs.length === 1) this.next(true);
      }
    });

    wsContract.events.Clear({}, (err, receipt) => {
      if (err) {
        console.log('[WEB3 -- WS Clear err]', err);
      }

      if (receipt) {
        console.log('[WEB3 -- WS Clear txn]', receipt);
        queue.commit.clearSongs();
        if (queue.state.track) queue.state.track.pause();
        queue.commit.setTrack(undefined);
      }
    });
  }
}

// --- Getters --- //

class QueueGetters extends ModuleGetters<QueueState> {
  get currentSong() {
    return this[state].songs[0];
  }

  getCurrentSongDetails() {
    return getSongDetails(this[state].songs[0]);
  }
}

// --- Module --- //

export const queue = vuexTsBuilder({
  name: 'queue',
  state: initialQueueState,
}).inject({
  mutations: QueueMutations,
  actions: QueueActions,
  getters: QueueGetters,
});
