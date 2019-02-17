import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { registerVuexTsModules } from 'vuex-ts';

// Modules
import { jukebox } from './jukebox';
import { queue } from './queue';
import { web3 } from './web3';

Vue.use(Vuex);

export const store = new Store({
  plugins: [registerVuexTsModules(queue, web3, jukebox)],
});
