import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { registerVuexTsModules } from 'vuex-ts';

// Modules
import { jukebox } from './jukebox';
import { queue } from './queue';

Vue.use(Vuex);

export const store = new Store({
  plugins: [registerVuexTsModules(queue, jukebox)],
});
