import Vue from 'vue';

import VueApp from './components/VueApp.vue';
import { Web3Factory } from './lib/Web3Factory';
import { store } from './store';
import { jukebox } from './store/jukebox';
import { queue } from './store/queue';

async function main() {
  await Web3Factory.createHttpInstance();
  await Web3Factory.createWsInstance();
  await jukebox.dispatch.initialize(Web3Factory.getHttpInstance());
  await queue.dispatch.initialize(Web3Factory.getWsInstance());

  new Vue({
    store,

    el: document.getElementById('app-root') as any,

    render(h) {
      return h(VueApp);
    },
  });
}

main();
