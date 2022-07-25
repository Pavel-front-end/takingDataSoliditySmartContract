export interface Pool {
  poolAddress: string;
  name: string;
  symbol: string;
  totalPoolShares: string;
  depositToken: string;
  depositTokenSymbol: string;
  accountPendingRewards: string;
  accountClaimedRewards: string;
  accountTotalDeposit: string;
  accountPoolShares: string;
  poolTotalDeposit: string;
  totalWeight: string;
  weight: string;
  accountDepositTokenBalance: string;
  poolTotalTokenBalance: string;
  deposits: Deposit[];
  rewardPerSecond: string;
  isAllowance: boolean;
  poolBoostedDeposit: string;
};

export interface Deposit {
  id: number
  amount: string;
  start: string;
  end: string;
  symbol: string;
}

export interface FetchedData {
  pendingRewards: string;
  pools: Pool[];
  escrowPool: Pool;
  totalWeight: string;
  rewardPerSecond: string;
  lastDistribution: string;
  rewardSource: string;
  rewardToken: string;
  rewardTokenName: string;
  rewardTokenSymbol: string;
}

