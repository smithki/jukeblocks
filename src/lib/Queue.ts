import { QueuedSongData } from '../types';
import { Jukebox } from './Jukebox';

export class Queue {
  private queue: QueuedSongData[] = [];
  private current?: number;

  private contract: Jukebox;

  constructor(contract: Jukebox) {
    this.contract = contract;
  }

  public async refresh() {
    this.queue = [];

    const size = await this.contract.getQueueSize();

    for (let i = 0; i < size; i++) {
      const payload = await this.contract.getSongDataByQueueIndex(i);
      this.queue.push(payload);
    }

    try {
      this.current = await this.contract.getCurrentSongQueueIndex();
    } catch (err) {
      if (err.message.includes('No song is currently playing.')) {
        this.current = undefined;
      }
    }
  }

  public getQueue() {
    return this.queue;
  }

  public getCurrentSong() {
    if (this.current) return this.queue[this.current];
  }
}
