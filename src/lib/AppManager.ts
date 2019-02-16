import Vue from 'vue';
import VueApp from '../components/VueApp.vue';
import { Jukebox } from './Jukebox';
import { Queue } from './Queue';

export class AppManager {
  public static contract: Jukebox;
  public static queue: Queue;

  // --- App start logic --- //

  public static async start() {
    await this.initializeVue();
    await this.initializeContract();
    await this.intializeQueue();
  }

  // --- Initializations --- //

  private static async initializeVue() {
    new Vue({
      el: '#app-root',
      render(h) {
        return h(VueApp);
      },
    });
  }

  private static async initializeContract() {
    this.contract = new Jukebox();
  }

  private static async intializeQueue() {
    this.queue = new Queue(this.contract);
    await this.queue.refresh();
  }
}
