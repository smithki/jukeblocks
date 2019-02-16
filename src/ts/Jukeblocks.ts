import Web3 from 'web3';
import { Web3Factory } from './Web3Factory';

export class Jukeblocks {
  private web3: Web3;

  constructor() {
    this.web3 = Web3Factory.getHttpInstance();
  }
}
