import Vue from 'vue';

import VueApp from './components/VueApp.vue';
import { store } from './store';
import { jukebox } from './store/jukebox';
import { queue } from './store/queue';
import { web3 } from './store/web3';

async function main() {
  await web3.dispatch.initialize();
  await jukebox.dispatch.initialize(web3.state.http);
  await queue.dispatch.initialize(web3.state.ws);

  new Vue({
    store,

    el: document.getElementById('app-root') as any,

    render(h) {
      return h(VueApp);
    },
  });
}

main();
