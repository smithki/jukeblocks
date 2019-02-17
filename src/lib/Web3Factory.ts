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
    return this.wsInstance;
  }

  /**
   * Get the Web3 instance, which has been instantiated with the HTTP provider.
   */
  public static getHttpInstance(): Web3 {
    return this.httpInstance;
  }

  // --- Instance factories --- //

  /**
   * Create a new Web3 instance with the WebSocket provider.
   */
  public static async createWsInstance(): Promise<Web3> {
    this.wsInstance = new Web3(RPC_SOCKET_URL);
    return this.wsInstance;
  }

  /**
   * Create a new Web3 instance with the HTTP provider.
   */
  public static async createHttpInstance(): Promise<Web3> {
    let injectedProvider;

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
      this.httpInstance = new Web3(RPC_HTTP_URL);
      return this.httpInstance;
    }

    this.httpInstance = new Web3(injectedProvider);
    return this.httpInstance;
  }
}
