import Web3 from 'web3';
import { RPC_HTTP_URL, RPC_SOCKET_URL } from '../constants';

/**
 * A class that creates and manages Web3 instances
 */
export class Web3Factory {
  private static wsInstance: Web3;
  private static httpInstance: Web3;

  // --- Instance getters --- //

  /**
   * Get the Web3 instance, which has been instantiated with the WebSocket
   * provider.
   */
  public static getWsInstance(): Web3 {
    if (!this.wsInstance) this.createWsInstance();
    return this.wsInstance;
  }

  /**
   * Get the Web3 instance, which has been instantiated with the HTTP provider.
   */
  public static getHttpInstance(): Web3 {
    if (!this.httpInstance) this.createHttpInstance();
    return this.httpInstance;
  }

  // --- Instance factories --- //

  /**
   * Create a new Web3 instance with the WebSocket provider.
   */
  private static createWsInstance(): Web3 {
    this.wsInstance = new Web3(RPC_SOCKET_URL);
    return this.wsInstance;
  }

  /**
   * Create a new Web3 instance with the HTTP provider.
   */
  private static createHttpInstance(): Web3 {
    this.httpInstance = new Web3(RPC_HTTP_URL);
    return this.httpInstance;
  }
}
