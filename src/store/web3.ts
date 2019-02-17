import { ModuleActions, ModuleMutations, state, vuexTsBuilder } from 'vuex-ts';
import Web3 from 'web3';
import { RPC_HTTP_URL, RPC_SOCKET_URL } from '../constants';

// --- Model --- //

interface Web3State {
  http: Web3;
  ws: Web3;
}

const initialWeb3State: Web3State = {
  http: undefined,
  ws: undefined,
};

// --- Mutations --- //

class Web3Mutations extends ModuleMutations<Web3State> {
  setHttp(newHttp: Web3) {
    this[state].http = newHttp;
  }

  setWs(newWs: Web3) {
    this[state].ws = newWs;
  }
}

// --- Actions --- //

class Web3Actions extends ModuleActions<Web3State> {
  async createHttpInstance() {
    let injectedProvider: any;

    if ((window as any).ethereum) {
      injectedProvider = (window as any).ethereum;
      try {
        // Request account access if needed
        await injectedProvider.enable();
        injectedProvider = (window as any).web3.currentProvider;
      } catch (error) {
        injectedProvider = undefined;
      }
    } else if ((window as any).web3) {
      injectedProvider = (window as any).web3.currentProvider;
    }

    // Wallet not found or user denied access...
    if (!injectedProvider) {
      web3.commit.setHttp(new Web3(RPC_HTTP_URL));
    }

    web3.commit.setWs(new Web3(injectedProvider));
  }

  async createWsInstance() {
    web3.commit.setWs(new Web3(RPC_SOCKET_URL));
  }

  async initialize() {
    await this.createHttpInstance();
    await this.createWsInstance();
  }
}

// --- Module --- //

export const web3 = vuexTsBuilder({
  name: 'web3',
  state: initialWeb3State,
}).inject({
  mutations: Web3Mutations,
  actions: Web3Actions,
});
