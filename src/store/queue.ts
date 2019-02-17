import {
  ModuleActions,
  ModuleGetters,
  ModuleMutations,
  state,
  vuexTsBuilder,
} from 'vuex-ts';
import Web3 from 'web3/types';
import { QueuedSongData } from '../types';
import { jukebox } from './jukebox';

// --- Model --- //

interface QueueState {
  songs: QueuedSongData[];
  currentIndex: number;
}

const initialQueueState: QueueState = {
  songs: [],
  currentIndex: undefined,
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

  setCurrentIndex(index: number) {
    this[state].currentIndex = index;
  }
}

// --- Actions --- //

class QueueActions extends ModuleActions<QueueState> {
  async updateQueue() {
    queue.commit.clearSongs();

    const tempQueue = [];

    const size = await jukebox.state.contract.getQueueSize();

    for (let i = 0; i < size; i++) {
      const payload = await jukebox.state.contract.getSongDataByQueueIndex(i);
      tempQueue.push(payload);
    }

    try {
      queue.commit.setCurrentIndex(
        await jukebox.state.contract.getCurrentSongQueueIndex(),
      );
      tempQueue.splice(0, queue.state.currentIndex);
      queue.commit.setSongs(tempQueue);
    } catch (err) {
      console.log(err);
      // if (err.message.includes('No song is currently playing.')) {
      queue.commit.setCurrentIndex(undefined);
      // }
    }
  }

  async initialize(web3: Web3) {
    await this.updateQueue();
    const sub = await web3.eth.subscribe(name, (error, result) => {
      if (!error) {
        console.log('[WEB3 -- WS Subscribe success]', result);
      } else {
        console.log('[WEB3 -- WS subscribe error]', error);
      }
    });

    sub.on('data', transaction => {
      console.log('[WEB3 -- WS txn]', transaction);
    });
  }
}

// --- Getters --- //

class QueueGetters extends ModuleGetters<QueueState> {
  get currentSong() {
    if (this[state].currentIndex) {
      return this[state].songs[this[state].currentIndex];
    }
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
