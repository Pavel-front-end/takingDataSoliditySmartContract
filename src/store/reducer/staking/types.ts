import { Deposit, Pool } from "services/contracts/View";

export interface StakingState {
  loading: boolean;
  error: boolean;
  pools: Pool[]
  deposits: Deposit[]
}
