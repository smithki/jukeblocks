import { ModuleActions, ModuleMutations, state, vuexTsBuilder } from 'vuex-ts';
import Web3 from 'web3/types';
import { Jukebox } from '../lib/Jukebox';

// --- Model --- //

interface JukeboxState {
  contract: Jukebox;
}

const initialJukeboxState: JukeboxState = {
  contract: undefined,
};

// --- Mutations --- //

class JukeboxMutations extends ModuleMutations<JukeboxState> {
  setContract(instance: Jukebox) {
    this[state].contract = instance;
  }
}

// --- Actions --- //

class JukeboxActions extends ModuleActions<JukeboxState> {
  async initialize(web3: Web3) {
    jukebox.commit.setContract(new Jukebox());
    await jukebox.state.contract.initialize(web3);
  }
}

// --- Module --- //

export const jukebox = vuexTsBuilder({
  name: 'jukebox',
  state: initialJukeboxState,
}).inject({
  mutations: JukeboxMutations,
  actions: JukeboxActions,
});
