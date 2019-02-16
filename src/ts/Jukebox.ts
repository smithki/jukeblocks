import Web3 from 'web3';
import * as JukeboxArtifact from '../../build/contracts/Jukebox.json';
import { CONTRACT_ADDRESS, GAS_LIMIT } from '../constants';
import { QueuedSongData, SongData } from './types.js';
import { Web3Factory } from './Web3Factory';

export class Jukebox {
  private web3: Web3;
  private contract: any;

  constructor() {
    this.web3 = Web3Factory.getHttpInstance();
    this.contract = new this.web3.eth.Contract(
      JukeboxArtifact.abi as any,
      CONTRACT_ADDRESS,
    );
  }

  // --- Getters --- //

  /** Get the current size of the song queue. */
  getQueueSize(): Promise<number> {
    return new Promise((resolve, reject) => {
      this.contract.methods
        .getQueueSize()
        .call()
        .then((receipt: any) => {
          console.log('[JUKEBOX -- getQueueSize]', receipt);
          resolve(receipt);
        })
        .catch((err: any) => reject(err));
    });
  }

  /** Return data about a song currently in the queue. */
  getSongDataByQueueIndex(queueIndex: number): Promise<QueuedSongData> {
    return new Promise((resolve, reject) => {
      this.contract.methods
        .getSongDataByQueueIndex(queueIndex)
        .call()
        .then((receipt: any) => {
          const payload: QueuedSongData = {
            song: {
              id: receipt.songId,
              durationSecs: receipt.durationSecs,
            },
            timestampSecs: receipt.timestampSecs,
          };

          console.log('[JUKEBOX -- getSongDataByQueueIndex]', payload);
          resolve(payload);
        })
        .catch((err: any) => reject(err));
    });
  }

  /** Return data about a song from its unique ID. */
  getSongDataBySongId(songId: number): Promise<SongData> {
    return new Promise((resolve, reject) => {
      this.contract.methods
        .getSongDataBySongId(songId)
        .call()
        .then((receipt: any) => {
          const payload: SongData = {
            id: receipt.id,
            durationSecs: receipt.durationSecs,
          };

          console.log('[JUKEBOX -- getSongDataBySongId]', payload);
          resolve(payload);
        })
        .catch((err: any) => reject(err));
    });
  }

  /** Get the queue index of the currently playing song. */
  getCurrentSongQueueIndex(
    timestampSecs: number = Math.floor(new Date().getTime() / 1000),
  ): Promise<number> {
    return new Promise((resolve, reject) => {
      this.contract.methods
        .getCurrentSongQueueIndex(timestampSecs)
        .call()
        .then((receipt: any) => {
          console.log('[JUKEBOX -- getCurrentSongQueueIndex]', receipt);
          resolve(receipt[0]);
        })
        .catch((err: any) => reject(err));
    });
  }

  // --- Payable --- //

  /** Append a song to the jukebox playlist. */
  appendSongToQueue(
    songId: number,
    timestampSecs: number = Math.floor(new Date().getTime() / 1000),
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      this.contract.methods
        .appendSongToQueue(songId, timestampSecs)
        .send({
          from: '0xB076Fd168ec1533ceA1AAdd87d2F5BfAcF801301',
          gas: GAS_LIMIT,
        })
        .then((receipt: any) => {
          console.log('[JUKEBOX -- appendSongToQueue]', receipt);
        })
        .catch((err: any) => reject(err));
    });
  }

  /** Append a song to the jukebox playlist. */
  clearSongQueue(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.contract.methods
        .clearSongQueue()
        .send({
          from: '0xB076Fd168ec1533ceA1AAdd87d2F5BfAcF801301',
          gas: GAS_LIMIT,
        })
        .then((receipt: any) => {
          console.log('[JUKEBOX -- clearSongQueue]', receipt);
        })
        .catch((err: any) => reject(err));
    });
  }
}
