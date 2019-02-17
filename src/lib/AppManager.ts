import Vue from 'vue';
import VueApp from '../components/VueApp.vue';
import { Jukebox } from './Jukebox';
import { Queue } from './Queue';
import { Web3Factory } from './Web3Factory';

export class AppManager {
  public static contract: Jukebox;
  public static queue: Queue;

  // --- App start logic --- //

  public static async start() {
    await this.intitializeWeb3();
    await this.initializeContract();
    await this.intializeQueue();
    await this.initializeVue();
  }

  // --- Initializations --- //

  private static async intitializeWeb3() {
    await Web3Factory.createWsInstance();
    await Web3Factory.createHttpInstance();
  }

  private static async initializeVue() {
    new Vue({
      el: document.getElementById('app-root') as any,

      render(h) {
        return h(VueApp);
      },
    });
  }

  private static async initializeContract() {
    this.contract = new Jukebox();
    await this.contract.initialize();
  }

  private static async intializeQueue() {
    this.queue = new Queue(this.contract);
    await this.queue.refresh();
    if (this.queue.getQueue().length === 0) this.contract.appendSongToQueue(2);
  }
}
