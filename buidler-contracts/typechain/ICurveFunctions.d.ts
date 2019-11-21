/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface ICurveFunctionsInterface extends Interface {
  functions: {};

  events: {};
}

export class ICurveFunctions extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ICurveFunctions;
  attach(addressOrName: string): ICurveFunctions;
  deployed(): Promise<ICurveFunctions>;

  on(event: EventFilter | string, listener: Listener): ICurveFunctions;
  once(event: EventFilter | string, listener: Listener): ICurveFunctions;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): ICurveFunctions;
  removeAllListeners(eventName: EventFilter | string): ICurveFunctions;
  removeListener(eventName: any, listener: Listener): ICurveFunctions;

  interface: ICurveFunctionsInterface;

  functions: {
    curveIntegral(_x: BigNumberish): Promise<BigNumber>;

    inverseCurveIntegral(_x: BigNumberish): Promise<BigNumber>;
  };

  filters: {};

  estimate: {};
}
