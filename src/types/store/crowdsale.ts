import Web3 from 'web3';

export enum Stage {
  UNINITIALIZED = -1,
  FIRST = 1,
  PAUSE = 0,
  SECOND = 2,
}

export type CrowdSaleState = {
  isOpen: boolean;
  hardcap: number;
  totalBought: number;
  currentStage: Stage;
  stage1StartDate: Date;
  stage1EndDate: Date;
  stage2StartDate: Date;
  stage2EndDate: Date;
  zeroGasPrice: number;
};

export interface GetCrowdsaleInfoPayload {
  web3Provider: Web3;
}
