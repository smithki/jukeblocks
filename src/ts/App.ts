import { Jukebox } from './Jukebox';
import { Queue } from './Queue';

export class App {
  public static contract: Jukebox;
  public static queue: Queue;

  // --- App start logic --- //

  public static async start() {
    await this.initializeContract();
    await this.intializeQueue();
  }

  // --- Initializations --- //

  private static async initializeContract() {
    this.contract = new Jukebox();
  }

  private static async intializeQueue() {
    this.queue = new Queue(this.contract);
    await this.queue.refresh();
  }
}
