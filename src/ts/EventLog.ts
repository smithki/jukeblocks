import Web3 from 'web3';
import { Web3Factory } from './Web3Factory';

export class EventLog<Contract> {
  private web3: Web3;

  constructor(contract: Contract) {
    this.web3 = Web3Factory.getWsInstance();
  }
}
