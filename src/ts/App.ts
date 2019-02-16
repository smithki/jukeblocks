import Web3 from 'web3';
import { EventLog } from './EventLog';
import { Jukeblocks } from './Jukeblocks';
import { Web3Factory } from './Web3Factory';

export class App {
  public static contract: Jukeblocks;
  public static eventLog: EventLog<Jukeblocks>;

  // --- App start logic --- //

  public static async start() {
    await this.initialize();
  }

  // --- Initializations --- //

  private static async initialize() {
    await this.initializeContract();
    await this.initializeEventLog();
  }

  private static async initializeContract() {
    this.contract = new Jukeblocks();
  }

  private static async initializeEventLog() {
    this.eventLog = new EventLog<Jukeblocks>(this.contract);
  }
}
